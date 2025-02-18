import useMessageRequests from "@/ApiRequests/message";
import Loader from "@/components/Loader";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Messages from "../../components/Messages";
import { NotFoundData } from "../Orders";

export default function Index() {
	const { userData } = useAuth();
	const user = userData[0];
	const { GetCoversation } = useMessageRequests();
	const { data: conversations, isLoading, refetch } = GetCoversation("");

	useEffect(() => {
		// setIsLoading(false);
	}, [conversations]);

	if (isLoading) {
		return <Loader />;
	}

	console.log("check",conversations)

	return (
		<div className="w-full">
			<section className="">
				<h1 className="font-bold lg:text-4xl text-xl text-Heading">
					Mantente Conectado:
					<span className="text-orange font-bold">
						Tu Centro de Mensajes
					</span>
				</h1>
			</section>
			<div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
			{conversations?.length > 0 ? (
  conversations?.map((item: any) => {
    try {
      // Find the sender by filtering out the current user
      let sender = item?.participants?.find(
        (i: any) => i?._id !== user?._id
      );
      
      // If no sender is found, skip this conversation
      if (!sender) {
        return null; // Or you could render a different fallback component
      }

      // Check if sender's role is "handyman", and update sender data accordingly
      if (sender.role === "handyman") {
        sender = {
          ...sender,
          name: sender?.craftsman?.company_name || "Unknown Handyman", // Default name in case company_name is missing
        };
      }

      // Get the last message, ensuring the array exists
      const lastMessage = item?.messages?.length > 0 ? item?.messages[item?.messages?.length - 1] : null;

      // If no messages, render a fallback message or skip this conversation
      if (!lastMessage) {
        return null; // Or render a different fallback
      }

      // Return the Messages component with proper props
      return (
        <Messages
          convId={item?._id}
          key={item?._id}
          lastMessage={lastMessage}
          sender={sender}
          message={item?.messages}
        />
      );
    } catch (error) {
      console.error("Error rendering conversation:", error);
      return <NotFoundData text="Error loading conversation" />; // Fallback UI in case of error
    }
  })
) : (
  <NotFoundData text="No se encontraron mensajes" />
)}

			</div>
		</div>
	);
}
