import useUserRequests from "@/ApiRequests/user";
import { NotFoundData } from "@/components/Dashboard/handyman/Orders";
import Loader from "@/components/Loader";
import ServicePopUpPage from "@/components/landingPage/components/ServicePopUP";
import { ServiceCards } from "@/constants/landingPage/index";
import useScrollFetch from "@/hooks/useScrollFetchs";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoChevronDown, GoUnverified } from "react-icons/go";
import AllServices from "./AllServices";
import { changeServiceFormat } from "@/helper/changeServiceFormat";
import { useQueryClient } from "@tanstack/react-query";

type orderTimeType =
  | "Sort by rating"
  | "All"
  | "Five start rating"
  | "Four start rating"
  | "Three start rating"
  | "Two start rating"
  | "One start rating";

const Test_CardsData = [
  "Assembly service",
  "Air conditioning technician",
  "Bricklayers builders",
  "Building cleaning",
  "Construction Planner",
  "Carpenters",
  "Chimney builders",
  "Construction companies",
  "Concrete drillers",
  "Climate technicians",
];
const Cards = ({ title }: { title: string }) => {
  return (
    <div className="border-2 shadow m-2 rounded-md px-3 py-2">
      <span>{title}</span>
    </div>
  );
};

const Request_a_Quote__PopUp = ({
  serviceCardData,
  setServiceCardData,
}: {
  setServiceCardData: React.Dispatch<React.SetStateAction<string>>;
  serviceCardData: string;
}) => {
  const new_serviceCard = ServiceCards.filter((item) =>
    Test_CardsData.includes(item.shortText)
  );
  return (
    <>
      <div className="bg-white rounded-md p-3">
        <h1 className="text-4xl py-5 font-bold">Choose any service</h1>
        <AllServices />
      </div>
    </>
  );
};


const dummyText = `We offer professional and high-quality handyman services. Contact us for a quote and to get your project started.`;

const Available_handyman = ({ item }: any) => {
  const [servicePopUp, setServicePopUP] = useState<boolean>(false);
  const [serviceCardData, setServiceCardData] = useState<string>("");
  // console.log("serviceCardData", serviceCardData);
  useEffect(() => {
    if (!servicePopUp) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [servicePopUp]);
  return (
    <div className="bg-white shadow rounded-lg mt-10 py-5 lg:px-20 px-5">
      <div className="flex justify-center items-center lg:gap-20 flex-col lg:flex-row relative">
        <div className="flex justify-between items-center flex-col mt-5">
          <div className="rounded-full ">
            <Image
              src={item?.profile_photo}
              alt={item?.craftsman?.company_name}
              width={100}
              height={100}
              className="w-[100px] h-[85px] rounded-full"
              title={item?.craftsman?.company_name}
            />
          </div>
          <div className="flex justify-center items-center my-3">
            <CiLocationOn />
            <span>{item?.address?.Place_Name}</span>
          </div>
          <button className="bg-white border border-orange  p-2 rounded-lg hover:bg-orange hover:text-white">
            <Link href={`/craftsman/${item?.craftsman?.company_name}`}>
              Visit profile
            </Link>
          </button>
        </div>
        <div className="flex flex-col w-full">
          <section>
            <div className="flex  sm:items-center sm:gap-5 flex-col sm:flex-row my-5">
              <h3 className="text-2xl font-bold">
                {item?.craftsman?.company_name}
              </h3>

              <div className="flex sm:ml-3 items-center sm:justify-center">
                {item?.craftsman?.status === "verified" ? (
                  <Image
                    src={"/ProfileTest/verified.svg"}
                    alt="verifed"
                    width={100}
                    height={100}
                    className="w-[25px] h-[25px]"
                  />
                ) : (
                  <GoUnverified className="mr-1  w-[20px] h-[20px]" />
                )}
                <span>
                  {item?.craftsman?.status === "verified"
                    ? "Verified"
                    : "Unverified"}
                </span>
              </div>
              <div className="flex items-center">
                {item?.craftsman?.reviews ? (
                  <>
                    <div className="flex">
                      {Array.from({
                        length: 5,
                      })
                        .fill(0)
                        .map((i: any, ind: number) => (
                          <span
                            key={ind}
                            className={`text-3xl ${
                              ind < (item?.avgRating || 0)
                                ? "text-yellow-400"
                                : "text-gray-400"
                            } focus:outline-none`}
                          >
                            ★
                          </span>
                        ))}
                    </div>
                    <span className="inline-block mt-2 ml-1">
                      | {item?.craftsman?.reviews?.length}
                    </span>
                  </>
                ) : (
                  "No review"
                )}
                {/* <span className="mb-1 ml-2">| 73</span> */}
              </div>
            </div>
            <p className="sm:w-2/3 w-full">{item?.craftsman?.description || dummyText}</p>
          </section>
          <div className=" w-full">
            <div className="flex mt-6 flex-wrap   items-center justify-start ">
              {item?.craftsman?.services?.map((item: any, index: any) => (
                <Cards key={index} title={item} />
              ))}
            </div>
            {/* <button className="bg-white border border-orange  p-2 rounded-lg hover:bg-orange hover:text-white ml-1 mt-4 absolute right-0 top-0" onClick={() => {setServicePopUP(true);setServiceCardData('')}}>
              Request a Quote
            </button> */}
            {servicePopUp && (
              <div className="min-h-screen overflow-scroll w-full fixed inset-0 bg-gray-200 z-50 bg-opacity-50 flex justify-center items-center">
                <Request_a_Quote__PopUp
                  setServiceCardData={setServiceCardData}
                  serviceCardData={serviceCardData}
                />
              </div>
            )}
            {serviceCardData && servicePopUp && (
              <div className="fixed inset-0 bg-[rgba(189,189,189,0.6)] z-50">
                <div className="max-h-full overflow-y-auto">
                  <ServicePopUpPage
                    setServicePopUP={setServicePopUP}
                    servicePopUp={servicePopUp}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default function SearchResult({ params }: any) {
  const { handyman, search, city } = params;
  const [orderTime, setOrderTime] = useState<orderTimeType>("Sort by rating");
  const [orderNewOrOld, setOrderNewOrOld] = useState<boolean>(false);
  const [filterByRating, setFilterByRating] = useState<string>("");
  const [dataHandyMan, setDataHandyMan] = useState<any>(null);
  const { SearchHandyman } = useUserRequests();

  const {
    data,
    isLoading: loading,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = SearchHandyman(
    { pageSize: 10 },
    {
      zipCode: search[0],
      service: handyman,
      rating: filterByRating,
      city: city,
      distance: "50",
    }
  );
  //useScrollFetch({ hasNextPage, fetchNextPage, isWindowScroll: true });

  const queryClient = useQueryClient();

  useEffect(() => {
    refetch();
  
    return () => {
      queryClient.invalidateQueries({ queryKey: ['searchHandyman'] });
    };
  }, [filterByRating, refetch, queryClient]);

  useEffect(() => {
    if (data && !loading) {
      setDataHandyMan(data.pages);
    }
  }, [data, loading]);

  if (!dataHandyMan) {
    return <Loader />;
  }

  return (
    <div className="w-full my-5">
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center justify-center bg-white shadow rounded-lg py-[20px] px-[10px]">
          <p className="font-semibold">
            Explore Qualified Craftsman Profiles in {city} for{" "}
            {changeServiceFormat(handyman)} within a 50-Kilometer Radius
          </p>
        </div>
        <div className={`shadow bg-white  rounded-md py-3 px-4 gap-4 relative`}>
          <div
            className={`flex rounded-md  w-[150px] gap-4 ${
              orderNewOrOld && "text-orange"
            }`}
          >
            <button onClick={() => setOrderNewOrOld(!orderNewOrOld)}>
              {orderTime}
            </button>
            <GoChevronDown className="mt-1 text-xl" />
          </div>
          {orderNewOrOld && (
            <div
              className={`bg-white shadow  w-full p-3 rounded cursor-pointer   mt-4   absolute flex flex-col space-y-5 left-0 z-40`}
            >
              <span
                className=" hover:text-orange  cursor-pointer"
                onClick={() => {
                  setOrderNewOrOld(false);
                  setOrderTime("All");
                  setFilterByRating("");
                }}
              >
                All
              </span>
              <span
                className=" hover:text-orange   cursor-pointer"
                onClick={() => {
                  setOrderNewOrOld(false);
                  setOrderTime("Five start rating");
                  setFilterByRating("5");
                }}
              >
                Five start rating
              </span>
              <span
                className=" hover:text-orange  cursor-pointer"
                onClick={() => {
                  setOrderNewOrOld(false);
                  setOrderTime("Four start rating");
                  setFilterByRating("4");
                }}
              >
                Four start rating
              </span>
              <span
                className=" hover:text-orange  cursor-pointer"
                onClick={() => {
                  setOrderNewOrOld(false);
                  setOrderTime("Three start rating");
                  setFilterByRating("3");
                }}
              >
                Three start rating
              </span>
              <span
                className=" hover:text-orange  cursor-pointer"
                onClick={() => {
                  setOrderNewOrOld(false);
                  setOrderTime("Two start rating");
                  setFilterByRating("2");
                }}
              >
                Two start rating
              </span>
              <span
                className=" hover:text-orange  cursor-pointer"
                onClick={() => {
                  setOrderNewOrOld(false);
                  setOrderTime("One start rating");
                  setFilterByRating("1");
                }}
              >
                One start rating
              </span>
            </div>
          )}
        </div>
      </div>

      {dataHandyMan?.map((page: any, ind: number) => (
        <Fragment key={ind}>
          {page?.users?.length === 0 ? (
            <NotFoundData text="No Profile Found" />
          ) : (
            page?.users?.map((item: any, ind: number) => (
              <Available_handyman item={item} key={ind} />
            ))
          )}
        </Fragment>
      ))}
    </div>
  );
}
