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
	const handleErorr = clientError();
	const [selectCard, setSelectCard] = useState<string[]>([]);
	const [orderTime, setOrderTime] = useState<orderTimeType>(
		"Sort by newest or older"
	);
	const { userData } = useAuth();
	const user = userData[0] || undefined;
	const postalCode: string = user?.address?.Postal_Code.toString() || '';
	//console.log('userData=======', user?.address?.Postal_Code)

	const { GetPublicJobs } = useJobpostRequests();
	const { GetFilter, UpdatedFilter } = useFilterRequests();
	//const { data: filterData = {}, isLoading } = GetFilter();
	//console.log('filter Data',filterData,isLoading)
	// const { data, refetch, isLoading } = GetPublicJobs(selectCard)
	const [filter, setFilter] = useState<FilterType>({
		distance: "100",
		pin_code: postalCode,
		categories: []
	});
	const [selectedService, setSelectedService] =
		useState<string>("Select Service");


	const handleUpdate = async (data: any) => {
		try {
			await UpdatedFilter.mutateAsync(data, {
				onSuccess(data) {
					//toast.success("Updated Successfully");
				},
			});
			return undefined;
		} catch (error) {
			console.error(error)
			handleErorr(error);
			return undefined;
		}
	};

	useEffect(() => {
		//const dbFilterItem = localStorage.getItem("filter")

		//if (!isLoading && filterData) {
		//	setSelectCard(filterData.categories);
		//	setFilter(filterData);
		//}

		(async () => {
			const res = await GetFilter();
			//console.log('====data=====', res)
			setSelectCard(res.categories);
			setFilter(res);
		})()
	}, [])

	useEffect(() => {
		const newFilter = { ...filter, categories: selectCard }

		//console.log('======equal arrays=========',selectCard,newFilter.categories)
		//localStorage.setItem("filter", JSON.stringify(newFilter))
		handleUpdate(newFilter)
		setFilter(newFilter);
		//console.log(JSON.parse(dbFilterItem))
	}, [selectCard]);

	const {
		data,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		refetch,
		isRefetching,
		fetchNextPage,
	} = GetPublicJobs({ pageSize: 10 }, filter);

	//	console.log("==data==",data)

	useEffect(() => {
		refetch();
	}, [filter]);
	useScrollFetch({
		fetchNextPage,
		hasNextPage,
		isWindowScroll: true,
	});
	//console.log('====filter======', filter);
	return (
		<div className="bg-[#F2F8FF]">
			<Head>
				<title>Handyman | Job Listing</title>
				<meta
					name="description"
					content="Discover a new job opportunity in the world of craftsmen work. Post your job listing and attract skilled professionals to bring your project to life. Find the right craftsmen to deliver exceptional results. Don't miss out on this exciting opportunity, post your job now!"
				/>{" "}
				{/*Short description more effective for SEO*/}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/joblisting`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HandymanLayout>
				<main className="pb-20">
					<div className="">
						<div className="flex flex-col gap-4 lg:gap-7">
							<div className="text-center md:text-2xl text-lg lg:text-3xl font-bold">
								<h1>
									Explore Job Opportunities <br />
									<span className="text-orange">
										Your Job Listing Hub
									</span>
								</h1>
							</div>

							<div className="flex align-center justify-center  gap-10">
								<FaFilter fontSize={40} />
								<h1 className="lg:text-4xl">Filter</h1>
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
							{Object?.values(filter)?.some((i) => i?.length > 0) &&
								isRefetching ? (
								<Loader />
							) : data?.pages[0]?.data?.length > 0 ? (
								<div className={`mx-auto  xl:px-20 `}>
									{data?.pages?.map((page, pageIndex) => (
										<React.Fragment key={pageIndex}>
											{page?.data?.map((job: any) => (
												<JOB key={job._id} jobs={job} />
											))}
										</React.Fragment>
									))}

									{isFetchingNextPage && <Loader />}
								</div>
							) : (
								<NotFoundData text="No Jobs found" />
							)}
						</div>
					</div>
				</main>
			</HandymanLayout>
		</div>
	);
}
