import usePlanRequest from "@/ApiRequests/plan";
import useUserRequests from "@/ApiRequests/user";
import Loader from "@/components/Loader";
import CustomConfirmPrompt from "@/components/Modals/CustomConfirmPromp";
import clientError from "@/helper/clientError";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface BankDetails {
	accountHolderName: string;
	bankName: string;
	iban: string;
}

interface PaymentDetails {
	payment_method: string;
	bank_details: BankDetails;
}

interface PlanDetails {
	name: string;
	price: number;
	duration_in_months: number;
	description: string;
}

interface SubscriptionDetailsProps {
	payment_details: PaymentDetails;
	_id: string;
	craftsmanId: any;
	plan: PlanDetails;
	paymentId: string;
	// start_date: string;
	// end_date: string;
	payment_status: string;
	onReject?: () => void;
	onConfirm?: () => void;
}

const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({
	payment_details,
	_id,
	craftsmanId,
	plan,
	paymentId,
	// start_date,
	// end_date,
	payment_status,
	onReject,
	onConfirm,
}) => {
	const handleClietError = clientError();
	const { VerifyPayment } = usePlanRequest();
	const [isConfirm, setIsConfirm] = useState(false);
	const { GetUser } = useUserRequests();
	const { data: craftsman, isLoading } = GetUser({ _id: craftsmanId?.user });

	const handleConfirm = async () => {
		try {
			await VerifyPayment.mutateAsync(
				{ subscriptionId: _id },
				{
					onSuccess(data) {
						toast.success("Payment Successfully Confirmed");
						setIsConfirm(false);
						onReject && onReject();
					},
				}
			);
		} catch (error) {
			handleClietError(error);
		}
	};
	return (
		<div className="max-w-full mx-auto  font-sans">
			<div className="mx-auto bg-white rounded-lg p-6 flex gap-4">
				<div className="mb-4 border-r pr-4">
					<h1 className="text-2xl font-bold text-gray-900 mb-6">
						Craftsman Details
					</h1>
					{isLoading ? (
						<Loader />
					) : (
						<div className="flex flex-col gap-1 ">
							<p>
								<b>First Name:</b> {craftsman?.name}
							</p>
							<p>
								<b>Last Name:</b> {craftsman?.lastName}
							</p>
							<p>
								<b>Compnay Name:</b> {craftsmanId?.company_name}
							</p>
							<p>
								<b>Email:</b> {craftsman?.email}
							</p>
							<p>
								<b>Street Address:</b>{" "}
								{craftsman?.streetAddress}
							</p>
							<p>
								<b>Zipcode:</b>{" "}
								{craftsman?.address?.Postal_Code}
							</p>
							<p>
								<b>Place Name:</b>{" "}
								{craftsman?.address?.Place_Name}
							</p>
						</div>
					)}
				</div>

				<div className="">
					<h1 className="text-2xl font-bold text-gray-900 mb-6">
						Subscription Details
					</h1>
					<div className="mb-4">
						<h2 className=" font-semibold text-gray-800">
							Payment ID :{paymentId}
						</h2>
					</div>

					<div className="mb-4">
						<h2 className="text-xl font-semibold text-gray-800">
							Plan
						</h2>
						<p className=" text-gray-700">
							<span>Name:</span> {plan?.name}
						</p>
						<p className=" text-gray-700">
							<span>Price:</span> ${plan?.price}
						</p>
						<p className=" text-gray-700">
							<span>Duration:</span> {plan?.duration_in_months}{" "}
							months
						</p>
						<p className=" text-gray-700">
							<span>Description:</span> {plan?.description}
						</p>
						<p className=" text-gray-700 capitalize">
							<span> Payment Method:</span>{" "}
							{payment_details?.payment_method
								.split("_")
								.join(" ")}
						</p>
					</div>

					{payment_status === "pending" && (
						<div className="flex justify-between mt-6">
							<button
								onClick={onReject}
								className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600">
								Cancel
							</button>
							<button
								onClick={() => setIsConfirm(true)}
								className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600">
								Confirm
							</button>
						</div>
					)}
				</div>
			</div>
			<CustomConfirmPrompt
				promptText="Are you sure want to confirm this payment"
				isOpen={isConfirm}
				onCancel={() => setIsConfirm(false)}
				onConfirm={handleConfirm}
				isLoading={VerifyPayment.isPending}
			/>
		</div>
	);
};

export default SubscriptionDetails;
