import useUserRequests from "@/ApiRequests/user";
import User from "@/backend/controllers/user/interface";
import ModalStruc from "@/components/Common/ModalStruc";
import { NotFoundData } from "@/components/Dashboard/handyman/Orders";
import Loader from "@/components/Loader";
import clientError from "@/helper/clientError";
import useScrollFetch from "@/hooks/useScrollFetchs";
import moment from "moment";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ChangeProfileStatus from "./ChangeStatus";
import { getStatusBadge } from "./ClientProfile";

const UserList = ({ search }: { search: string }) => {
	const [filter, setFilter] = useState({ search });
	const { GetUsers, UpdateCraftman, UpdateUser } = useUserRequests();
	const handleError = clientError();
	const handleEdit = async (
		newValue: string,
		identifier: string,
		user: string
	) => {
		try {
			// update user
			await UpdateUser.mutateAsync(
				{ [identifier]: newValue, user: editData.user },
				{
					onSuccess(data) {
						toast.success("Data Updated Successfully");
						setEditData(initialEditInfo);
					},
				}
			);
		} catch (error) {
			handleError(error);
		}
	};

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		refetch,
		isRefetching,
		isLoading,
	} = GetUsers({ pageSize: 10, role: "handyman" }, { search });

	const { handleScroll } = useScrollFetch({ fetchNextPage, hasNextPage });
	const initialEditInfo = {
		isOpen: false,
		identifier: "",
		value: "",
		user: "",
	};
	const [editData, setEditData] = useState(initialEditInfo);

	useEffect(() => {
		refetch();
	}, [search, refetch]);
	return (
		<section className="mt-10 shadow-md rounded-md">
			<div className="min-w-[1000px]">
				<div
					className={`" max-h-[30rem] ${
						data?.pages[0]?.data.length > 8
							? "overflow-auto"
							: "overflow-hidden"
					} md:w-full"`}
					onScroll={handleScroll}>
					{!isRefetching && !isLoading && (
						<table className="min-w-full border border-grey">
							<thead
								className={`bg-[#F9B18B]  sticky -top-1 ${
									!editData.isOpen && "z-10"
								}`}>
								<tr>
									<th className="p-4">Image</th>
									<th className="p-4">Name</th>
									<th className="p-4">Company Name</th>
									<th className="p-4">Email</th>
									<th className="p-4">IP Address</th>
									<th className="p-4">Registration Date</th>
									<th className="p-4">Phone Number</th>
									<th className="p-4">Role</th>
									<th className="p-4">Active</th>
								</tr>

								<tr
									className={`absolute border-t  ${
										isFetchingNextPage ? "top-10 " : "top-0"
									}  border-white  text-center mx-auto flex items-center justify-center w-full bg-[#F9B18B]`}
									style={{
										opacity: isFetchingNextPage ? "1" : "0",
										transition: "all 0.3s ease-in-out",
									}}>
									<td
										colSpan={9}
										className="text-center font-semibold py-1">
										Loading ...
									</td>
								</tr>
							</thead>

							<tbody className="relative">
								{data?.pages.map((page, index) => (
									<Fragment key={index}>
										{page?.data?.map((item: User) => {
											item.status =
												item.active_status === "active"
													? true
													: false;
											return (
												<Fragment key={item._id}>
													<tr className="mb-2">
														<td className="flex items-center justify-center">
															<Image
																height={50}
																width={50}
																alt="profile"
																src={
																	item.profile_photo as string
																}
																className="rounded-full h-12 w-12"
															/>
														</td>
														<td className="text-center ">
															{item.name}
														</td>
														<td className="text-center ">
															{item.craftsman
																?.company_name ||
																"------"}
														</td>
														<td className="text-center ">
															{item.email}
														</td>
														<td className="text-center ">
															{item.ip ||
																"------"}
														</td>
														<td className="text-center ">
															{moment(
																item.createdAt
															).format("L")}
														</td>
														<td className="text-center ">
															{item.phone}
														</td>
														<td className="text-center ">
															{item.role}
														</td>
														<td
															className="cursor-pointer"
															onClick={() => {
																setEditData({
																	isOpen: true,
																	identifier:
																		"active_status",
																	value:
																		item.active_status ||
																		"inactive",
																	user: item._id as string,
																});
															}}>
															{getStatusBadge(
																item.status
															)}
														</td>
													</tr>
												</Fragment>
											);
										})}
									</Fragment>
								))}
							</tbody>
						</table>
					)}

					{(isLoading || (isRefetching && !isFetchingNextPage)) && (
						<Loader />
					)}
					{data?.pages[0].data.length === 0 &&
						!isRefetching &&
						!isLoading && <NotFoundData text="No user found" />}
				</div>
			</div>

			<ModalStruc
				isOpen={editData.isOpen}
				closeModal={() =>
					setEditData((p: any) => ({ ...p, isOpen: false }))
				}>
				<ChangeProfileStatus
					isUpdating={
						UpdateCraftman.isPending || UpdateUser.isPending
					}
					identifier={editData.identifier}
					value={editData.value}
					onSubmit={handleEdit}
				/>
			</ModalStruc>
		</section>
	);
};

export default UserList;
