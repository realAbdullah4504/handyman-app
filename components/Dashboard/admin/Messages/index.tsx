import { Context } from "@/components/Common/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { useChatContext } from "@/context/ChatContext";
import { useContext } from "react";
import Messages from "../../components/Messages";
const TestData = [
	{
		id: 1,
		name: "Paul Ben",
		time: "5 hours ago",
		message:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
	},
	{
		id: 2,
		name: "Paul Ben",
		time: "8 hours ago",
		message:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
	},
	{
		id: 3,
		name: "Paul Ben",
		time: "8 hours ago",
		message:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
	},
];
export default function Index() {
	const { toggleSideBar } = useContext(Context);
	const { userData } = useAuth();
	const user = userData[0];
	const { conversations, isLoading } = useChatContext();
	return (
		<div
			className={`lg:w-[80%]  ${
				toggleSideBar ? "mx-auto" : "md:mx-32"
			}  my-12`}>
			<section className="  my-8">
				<h1 className="font-bold text-4xl text-Heading">
					Administrative message management:
					<span className="text-orange font-bold">
						Control centre for admins{" "}
					</span>
				</h1>
			</section>
			<div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
				{!isLoading &&
					conversations?.map((item: any) => {
						let sender = item?.participants?.find(
							(i: any) => i?._id !== user?._id
						);
						if (sender.role === "handyman") {
							sender = {
								...sender,
								name: sender.craftsman.company_name,
							};
						}

						const lastMessage =
							item?.messages[item?.messages?.length - 1];

						return (
							<Messages
								convId={item?._id}
								key={item?._id}
								lastMessage={lastMessage}
								sender={sender}
								message={item?.messages}
							/>
						);
					})}
			</div>
		</div>
	);
}
