import useJobpostRequests from "@/ApiRequests/jobpost";
import { Context } from "@/components/Common/DashboardLayout";
import Loader from "@/components/Loader";
import { statuses } from "@/constants/Dashboard/handyman";
import useScrollFetch from "@/hooks/useScrollFetchs";
import React, { useContext } from "react";
import { NotFoundData } from "../../handyman/Orders";
import StatusButton from "../../handyman/Orders/components/StatusButton";
import Orders from "./components/orders";

export default function Index() {
	const { toggleSideBar } = useContext(Context);
	const { GetUserJobPost } = useJobpostRequests();

	const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
		GetUserJobPost({ pageSize: 5 }, {});

	useScrollFetch({
		hasNextPage,
		fetchNextPage,
		isWindowScroll: true,
	});

	return (
		<div className={` my-12 w-full flex flex-col gap-4`}>
			<section className="my-8">
				<h1 className="font-bold text-4xl text-Heading mb-5">
					Your craft journey:{" "}
					<span className="text-orange font-bold">
						Discover your job history{" "}
					</span>
				</h1>
				<div className="flex gap-3 justify-end my-3">
					{statuses?.slice(1, 4).map((status, idx) => (
						<StatusButton
							key={idx}
							showIcons={false}
							status={status}
						/>
					))}
				</div>{" "}
				<span className="text-[#3849E4] text-sm underline underline-offset-8 flex justify-end">
					See more
				</span>
			</section>
			{data?.pages[0]?.data?.length > 0 ? (
				data?.pages.map((page, pageIndex) => (
					<React.Fragment key={pageIndex}>
						{page?.data?.map((item: any) => (
							<div
								key={item._id}
								className="bg-white rounded-2xl shadow-md  ">
								<Orders item={item} />
							</div>
						))}
					</React.Fragment>
				))
			) : isFetching ? (
				<Loader />
			) : (
				<NotFoundData text="No offer received.Please check again later" />
			)}
			{hasNextPage && isFetchingNextPage && (
				<div className="bg-white h-[40rem] rounded-md shadow-md">
					<Loader />
				</div>
			)}
		</div>
	);
}
