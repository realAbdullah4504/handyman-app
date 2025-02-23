// Import necessary modules

import { findMatchingJobsAndSendEmail } from "@/backend/controllers/JobAlert/matchJobs";
import { verifyToken } from "@/backend/middleware/verifyJwt";
import connectDb from "@/backend/middleware/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let token = verifyToken(req, res);
	if (!token) return;
	switch (req.method) {
		case "POST":
			await findMatchingJobsAndSendEmail(req, res);
			break;
		default:
			res.status(405).json({ error: "Method Not Allowed" });
			break;
	}
}

export default connectDb(handler);