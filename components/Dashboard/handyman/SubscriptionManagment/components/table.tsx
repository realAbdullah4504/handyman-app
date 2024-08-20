// components/PaymentTable.tsx
import { useAuth } from "@/context/AuthContext";
import moment from "moment";
import Link from "next/link";
import React, { Fragment } from "react";
import { BiChevronDownCircle } from "react-icons/bi";
import { NotFoundData } from "../../Orders";

interface PaymentTableProps {
	subscription: any;
	isRefetching?: boolean;
	onView?: any;
}

const PaymentTable: React.FC<PaymentTableProps> = ({
	onView = (item: any) => {},
	subscription,
}) => {
	const { userData } = useAuth();
	const user = userData[0];
	return (
		<div className="w-full">
			<table
				className={`w-full table-fixed ${
					subscription?.pages[0]?.data.length === 0 && "flex flex-col"
				}`}>
				<thead className="mb-4">
					<tr
						className={`${
							subscription?.pages[0]?.data.length === 0 &&
							"flex items-center justify-between"
						} border-b-2 border-orange-500 `}>
						<th className="py-2 px-2  text-orange text-start">
							Payment Id
						</th>
						<th className="py-2 px-2   text-orange text-start">
							Payment Date
						</th>
						<th className="py-2 px-2  text-orange text-start">
							Payment Plan
						</th>
						<th className="py-2 px-2  text-orange text-start">
							Payment Thru
						</th>
						<th className="py-2 px-2  text-orange text-start">
							Payment Amount
						</th>
						<th className="py-2 px-2  text-orange text-start">
							Payment Status
						</th>
						<th className="py-2 px-2  text-orange text-start">
							{" "}
							<button className="text-black bg-orange rounded-xl p-2">
								Download All
							</button>
						</th>
					</tr>
				</thead>

				<tbody className="">
					{subscription?.pages?.map((page: any, ind: number) => (
						<Fragment key={ind}>
							{page.data.length === 0 ? (
								<div>
									<NotFoundData text="No data found" />
								</div>
							) : (
								page?.data?.map((item: any, index: number) => (
									<tr key={index} className="">
										<td className="py-2 px-4 border-b">
											<Link
												href={
													user.role === "admin"
														? `/craftsman/${item?.craftsmanId?.company_name}`
														: ""
												}>
												{item.paymentId}
											</Link>
										</td>
										<td className="py-2 px-4 border-b">
											{moment(item?.start_date).format(
												"L"
											)}
										</td>
										<td className="py-2 px-4 border-b">
											{item?.plan?.name}
										</td>
										<td className="py-2 px-4 border-b capitalize">
											{item?.payment_details?.payment_method
												?.split("_")
												?.join(" ")}
										</td>
										<td className="py-2 px-4 border-b">
											${item?.plan?.price}
										</td>
										<td className="py-2 px-4 border-b capitalize">
											{item?.payment_status}
										</td>
										<td className="py-2 px-4 border-b">
											{user.role === "handyman" &&
											item?.payment_status ===
												"pending" ? (
												""
											) : (
												<button
													onClick={() => onView(item)}
													className="text-orange flex gap-1 items-center">
													View{" "}
													{user.role === "handyman" &&
														"Invoice"}
													<BiChevronDownCircle />
												</button>
											)}
										</td>
									</tr>
								))
							)}
							{/* {isRefetching && <Loader />} */}
						</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PaymentTable;
