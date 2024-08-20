import PostalCode from "@/backend/models/PostalCode";
import { errorResponse } from "@/backend/utils/errorHandler";
import { NextApiRequest, NextApiResponse } from "next/types";

export const deletePostalCode = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { id } = req.query;
	try {
		const deletedPostalCode = await PostalCode.findByIdAndDelete(id);
		if (!deletedPostalCode) {
			res.status(404).json({ message: "Postal code not found" });
		} else {
			res.status(200).json({
				message: "Postal code deleted successfully",
			});
		}
	} catch (error: any) {
		errorResponse(res, error);
	}
};
