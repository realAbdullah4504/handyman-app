// Import necessary modules
import { getJobAlerts, updateJobAlert } from "@/backend/controllers/JobAlert";
import connectDb from "@/backend/middleware/db";
import { verifyToken } from "@/backend/middleware/verifyJwt";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let token = verifyToken(req, res);
	if (!token) return;
	switch (req.method) {
		case "GET":
			await getJobAlerts(req, res, token);
			break;
		case "PUT":
			await updateJobAlert(req, res, token);
			break;
		
		default:
			res.status(405).json({ error: "Method Not Allowed" });
			break;
	}
}

export default connectDb(handler);