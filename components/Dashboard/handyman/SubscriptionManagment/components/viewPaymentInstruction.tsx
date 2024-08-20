import React from "react";

interface BankDetails {
	bankName: string;
	iban: string;
	swiftCode: string;
}

interface PlanDetails {
	duration_in_months: number;
	price: number;
}

interface BankDetailsEmailProps {
	name: string;
	plan: PlanDetails;
	paymentId: string;
}

const BankDetailsEmail: React.FC<BankDetailsEmailProps> = ({
	name,
	plan,
	paymentId,
}) => {
	return (
		<div className="max-w-full mx-auto font-sans">
			<div className="max-w-lg mx-auto p-6">
				<div className="mb-8 text-center">
					<h1 className="text-xl font-bold mb-2">
						Payment Instructions
					</h1>
				</div>
				<p className=" mb-2">Dear {name},</p>
				<p className=" mb-4">
					Thank you for booking the {plan?.duration_in_months * 30}-Day
					Package on our craftsman portal! Please transfer the
					corresponding amount to the account provided below, and
					don&appos;t forget to include the following Payment ID as
					the reference:
				</p>
				<p className="mb-2">
					<strong>Payment ID:</strong> <span className="text-red-400"> {paymentId}</span>
				</p>
				<p className=" mb-4">
					<strong>Amount:</strong> ${plan?.price}
				</p>
				<div className="p-2 bg-gray-100 rounded-lg mb-4">
					<h2 className=" font-bold mb-2">Bank Details</h2>
					<p className="mb-2">
						<span className="font-semibold">Bank Name:</span>{" "}
						{process.env.NEXT_PUBLIC_BANK_NAME}
					</p>
					<p className="mb-2">
						<span className="font-semibold">IBAN:</span> {process.env.NEXT_PUBLIC_IBAN}
					</p>
					<p className="">
						<span className="font-semibold">BIC/SWIFT Code:</span>{" "}
						{process.env.NEXT_PUBLIC_SWIFT_CODE}
					</p>
				</div>
				<p className=" mb-2">
					Once we receive your payment, your subscription will be
					activated automatically. If you have any questions or need
					assistance, please don&appos;t hesitate to contact us.
				</p>
	
				<p className=" mb-4">Thank you for your cooperation!</p>
				<hr className="border-t border-gray-300 mb-4" />
				<p className="">
					Best regards,
					<br />
					Handyman Service Portal Team
				</p>
			</div>
		</div>
	);
};

export default BankDetailsEmail;
