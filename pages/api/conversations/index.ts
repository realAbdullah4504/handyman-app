// Import necessary modules
import {
	addMessage,
	createConversation,
} from "@/backend/controllers/Coversation/CreateMessage";
import { getConversationsByUser } from "@/backend/controllers/Coversation/GetCoversation";
import { verifyToken } from "@/backend/middleware/verifyJwt";
import { createError, errorResponse } from "@/backend/utils/errorHandler";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let token = verifyToken(req, res);

	if (req.method === "GET") {
		try {
			if (token) {
				const response = await getConversationsByUser(token._id);
				res.status(200).json({
					message: "data successfully retrive",
					response,
				});
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}

	// create conversation
	if (req.method === "POST") {
		try {
			const token = verifyToken(req, res);
			if (token) {
				const sender = token._id;
				const { receiver, message } = req.body;
				if (!receiver) {
					createError("receiver not found", 400);
				}
				const response = await createConversation(
					sender,
					receiver,
					message
				);
				res.status(201).json({
					message: "Coversation created successfully",
					response,
				});
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}

	// add message  and update conversation
	if (req.method === "PUT") {
		try {
			const token = verifyToken(req, res);
			if (token) {
				const sender = token._id;
				let { convId, message } = req.body;
				message.sender = sender;
				if (!convId) {
					createError("conversation id is missing", 400);
				}
				const response = await addMessage(convId, message);
				res.status(200).json({
					messag: "Message sent successfully",
					response,
				});
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}

	if (!["POST", "PUT", "GET"].includes(req.method as string)) {
		res.status(405).json({ error: "Method Not Allowed" });
	}
}
