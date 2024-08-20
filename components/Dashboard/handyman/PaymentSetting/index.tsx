import Switcher1 from "@/components/Common/Switch";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";
import stripelogo from "./2560px-Stripe_Logo__revised_2016.svg-removebg-preview.png";
import banklogo from "./bank.png";
export default function SubscriptionManagement() {
	const cardsData = [
		{
			cardType: "VISA",
			cardNumber: "***** 5555",
			text: "Filippo Di Trapani",
			expiryDate: "07/22",
			imgSrc: "/Dashboard/handyman/paypal-logo.svg",
			checked: true,
			shortDesc: "Add another PayPal  Account",
		},
		{
			cardType: "VISA",
			cardNumber: "***** 5555",
			text: "Filippo Di Trapani",
			expiryDate: "07/22",
			imgSrc: banklogo,
			checked: false,
			shortDesc: "Add another credit or debit card",
		},
		{
			cardType: "VISA",
			cardNumber: "***** 5555",
			text: "Filippo Di Trapani",
			expiryDate: "07/22",
			imgSrc: stripelogo,
			checked: false,
			shortDesc: "Add another credit or debit card",
		},
	];
	return (
		<div className="my-2 w-full md:mx-32">
			<h1 className="text-3xl font-bold">
				<span className="text-orange">Manage Your Payments: </span>{" "}
				Explore Payment Settings
			</h1>
			<div className="w-full flex gap-2">
				<div className="w-4/5">
					<div className="my-7 mx-5  flex flex-col justify-start gap-10 p-4 rounded-xl">
						{cardsData.map((item, idx) => {
							return (
								<div
									key={idx}
									className="flex gap-2  bg-white w-5/5 shadow-md p-4 rounded-md border border-black border-opacity-10"
									style={{ minHeight: 120 }}>
									<div className="flex w-1/5 items-center gap-2">
										<Switcher1
											isChecked={item.checked}
											setIsChecked={() => {}}
											handleAction={() => {}}
										/>
										{/* <BiCheckCircle
											color={
												item.checked
													? "#FF6A18"
													: "#00000092"
											}
										/>
										<div className="flex flex-col">
											<span className="text-[#00000092]">
												{item?.cardType}{" "}
												{item?.cardNumber}{" "}
											</span>
											<span className="text-[#00000092]">
												{item?.text}
											</span>
										</div> */}
									</div>
									<div className="flex w-4/5 justify-between items-center text-[#00000092] ">
										<div></div>
										<div>
											<Image
												alt={""}
												width={118}
												height={44}
												src={item?.imgSrc}
											/>
										</div>
									</div>
								</div>
							);
						})}
						{/* {cardsData.map((item, idx) => {
							return (
								<div
									key={idx}
									className="flex bg-white gap-2 w-5/5 shadow-md p-3 justify-between rounded-md border border-black border-opacity-10"
									style={{ minHeight: 120 }}>
									<div className="flex w-3/5 items-center gap-2">
										<BiCheckCircle
											color={
												item.checked
													? "#FF6A18"
													: "#00000092"
											}
										/>
										<div className="flex ">
											<span className="text-[#00000092]">
												{item?.shortDesc}{" "}
											</span>
										</div>
									</div>
									<div className="flex w-2/5 justify-end item-start text-[#00000092] ">
										<div>
											<Image
												alt={""}
												width={118}
												height={44}
												src={item?.imgSrc}
											/>
										</div>
									</div>
								</div>
							);
						})} */}
						<div className="flex items-center gap-2 w-4/5">
							<BiInfoCircle color={"#00000092"} fontSize={30} />{" "}
							<span className="text-[#00000092]">
								By saving this credit card, you agree to our
								Terms of Service and you authorized it to be
								charged on a recurring basis until you cancel
								your subscription - which you can do at any time{" "}
							</span>
						</div>
						<div>
							<button className="px-4 text-white py-2 text-black bg-orange rounded-xl ">
								Submit
							</button>
						</div>
					</div>
				</div>
				<div className="w-1/5 flex flex-col gap-3">
					<div className="rounded-xl bg-[#F0ECEC] my-6 p-4">
						<h1 className="border-b  p-4 border-b-3 mb-2 border-black border-opacity-57">
							Subscription Details
						</h1>
						<span className="text-[#0E172C] text-xs mt-2 p-4">
							Thank you for choosing our subscription service.
							Your subscription includes access to premium
							content, exclusive features and regular updates. To
							manage your subscription or make changes, you can
							make adjustments here. If you have any questions or
							need help, please do not hesitate to contact us via
							support@example.com
						</span>
					</div>
					{/* <div className="rounded-xl bg-[#F0ECEC] my-6 p-4">
						<h1 className="border-b  p-4 border-b-3 mb-2 border-black border-opacity-57">
							Subscription Details
						</h1>
						<span className="text-[#0E172C] text-xs mt-2 p-4">
							Thank you for choosing our subscription service.
							Your subscription includes access to premium
							content, exclusive features and regular updates. To
							manage your subscription or make changes, you can
							make adjustments here. If you have any questions or
							need help, please do not hesitate to contact us via
							support@example.com
						</span>
					</div> */}
				</div>
			</div>
		</div>
	);
}
