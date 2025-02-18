import useFilterRequests from "@/ApiRequests/filter";
import useJobpostRequests from "@/ApiRequests/jobpost";
import { NewListedOrderPage } from "@/components";
import { HandymanLayout } from "@/components/Dashboard";
import { NotFoundData } from "@/components/Dashboard/handyman/Orders";
import Loader from "@/components/Loader";
import { JOB } from "@/components/landingPage/components/NewJob/Job";
import { useAuth } from "@/context/AuthContext";
import clientError from "@/helper/clientError";
import useScrollFetch from "@/hooks/useScrollFetchs";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFilter } from "react-icons/fa";

export default function Index() {
  const handleError = clientError();
  const [selectCard, setSelectCard] = useState<string[]>([]);
  const [orderTime, setOrderTime] = useState<orderTimeType>("Sort by newest or older");
  const { userData } = useAuth();
  const user = userData[0] || undefined;
  const postalCode: string = user?.address?.Postal_Code.toString() || "";

  const { GetPublicJobs } = useJobpostRequests();
  const { GetFilter, UpdatedFilter } = useFilterRequests();

  const [filter, setFilter] = useState<FilterType>({
    distance: "100",
    pin_code: postalCode,
    categories: [],
  });

  const [selectedService, setSelectedService] = useState<string>("Select Service");

  const handleUpdate = async (data: any) => {
    try {
      await UpdatedFilter.mutateAsync(data, {
        onSuccess(data) {
          // Optional: handle successful update here
        },
      });
    } catch (error) {
      console.error(error);
      handleError(error);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await GetFilter();
      setSelectCard(res?.categories);
      setFilter(res); // Set initial filter when GetFilter is successful
    })();
  }, []); // Empty dependency array: runs only once on mount

  useEffect(() => {
    if (filter && JSON.stringify(filter.categories) !== JSON.stringify(selectCard)) {
      // Check if categories actually changed
      const newFilter = { ...filter, categories: selectCard };
      handleUpdate(newFilter); // Call the update function only if necessary
      setFilter(newFilter); // Update state only if categories changed
    }
  }, [selectCard, filter]); // Trigger effect when selectCard or filter changes

  const {
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    isRefetching,
    isPending,
    fetchNextPage,
  } = GetPublicJobs({ pageSize: 10 }, filter);

  useScrollFetch({
    fetchNextPage,
    hasNextPage,
    isWindowScroll: true,
  });

  return (
    <div className="bg-[#F2F8FF]">
      <Head>
        <title>Handyman | Job Listing</title>
        <meta
          name="description"
          content="Discover a new job opportunity in the world of craftsmen work. Post your job listing and attract skilled professionals to bring your project to life. Find the right craftsmen to deliver exceptional results. Don't miss out on this exciting opportunity, post your job now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/joblisting`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HandymanLayout>
        <main className="pb-20">
          <div className="">
            <div className="flex flex-col gap-4 lg:gap-7">
              <div className="text-center md:text-2xl text-lg lg:text-3xl font-bold">
                <h1>
                  Explorar oportunidades de trabajo <br />
                  <span className="text-orange">
                    Tu centro de listado de trabajo
                  </span>
                </h1>
              </div>

              <div className="flex align-center justify-center gap-10">
                <FaFilter fontSize={40} />
                <h1 className="lg:text-4xl">Filtrar</h1>
              </div>

              <NewListedOrderPage
                selectCard={selectCard}
                setSelectCard={setSelectCard}
                setFilter={setFilter}
                filter={filter}
                orderTime={orderTime}
                setOrderTime={setOrderTime}
                selectedServices={selectedService}
                setSelectedServices={setSelectedService}
                handleUpdate={handleUpdate}
              />
            </div>

            <div className="p-4">
               {filter  && Object?.values(filter)?.some((i) => i?.length > 0) && isPending ? (
                <Loader />
              ) : data && data?.pages[0]?.data?.length > 0 ? (
                <div className={`mx-auto xl:px-20`}>
                  {data && data?.pages?.[0]?.data && data?.pages?.[0]?.data?.map((job: any, pageIndex: any) => (
                    <React.Fragment key={pageIndex}>
                      <JOB key={job._id} jobs={job} />
                    </React.Fragment>
                  ))}

                  {isFetchingNextPage && <Loader />}
                </div>
              ) : (
                <NotFoundData text="No se encontraron trabajos" />
              )}
            </div>
          </div>
        </main>
      </HandymanLayout>
    </div>
  );
}
