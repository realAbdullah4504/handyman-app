import { createReview } from "@/backend/controllers/Reviews/createReview";
import { deleteReviewById } from "@/backend/controllers/Reviews/deactivateReview";
import { getReviewsByUserId } from "@/backend/controllers/Reviews/getReviews";
import { updateReview } from "@/backend/controllers/Reviews/updateReview";
import connectDb from "@/backend/middleware/db";
import { verifyToken } from "@/backend/middleware/verifyJwt";
import {
	checkRequiredQueryParam,
	createError,
	errorResponse,
} from "@/backend/utils/errorHandler";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const payload = req.body;

	if (req.method === "GET") {
		try {
			const token = verifyToken(req, res);
			if (token) {
				let userId = token?._id;
				const { pageSize, pageNumber } = checkRequiredQueryParam(req);
				if (token.role === "handyman") userId = token.craftsman;
				const reviews = await getReviewsByUserId(userId, {
					pageNumber,
					pageSize,
				});
				res.status(200).json({
					message: "data successfully fetched",
					...reviews,
				});
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}

	if (req.method === "POST") {
		try {
			const { offerId, rating, comment } = payload;
			if (!offerId || !rating || !comment) {
				createError("required params is missing", 400);
			}
			const token = verifyToken(req, res);
			if (token) {
				token.role !== "client" &&
					createError(`you are not valid user for post review`, 401);
				const response = await createReview(offerId, rating, comment);
				res.status(201).json({ message: "Review posted", response });
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}

	if (req.method == "PUT") {
		const payload = req.body;
		try {
			const token = verifyToken(req, res);
			if (token) {
				if (token.role === "client") {
					const { reviewId, data } = payload;
					const { rating, comment } = data;
					const response = await updateReview(
						reviewId,
						token._id,
						rating,
						comment
					);
					res.status(200).json({
						message: "Review updated",
						data: response,
					});
				} else createError("only client can update review", 401);
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}

	if (req.method === "DELETE") {
		try {
			const { _id } = req.query;
			const token = verifyToken(req, res);
			if (token) {
				if (token.role === "client") {
					const response = await deleteReviewById(
						_id as string,
						token._id
					);
					res.status(200).json({
						message: "Review deleted",
						data: response,
					});
				} else createError("only client can delete review", 401);
			}
		} catch (error: any) {
			errorResponse(res, error);
		}
	}
	if (!["PUT", "GET", "DELETE", "POST"].includes(req.method as string)) {
		res.status(404).json({ message: "Invalid request method" });
	}
};

export default connectDb(handler);
