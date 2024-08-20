// Import necessary modules and types
import connectDb from "@/backend/middleware/db";
import Craftsman from "@/backend/models/CrafstmanModel";
import JobAlert from "@/backend/models/JobAlert";
import JobPost from "@/backend/models/NewJob";
import PostalCode from "@/backend/models/PostalCode";
import userDb from "@/backend/models/userModel";
import { createError } from "@/backend/utils/errorHandler";
import { transporter } from "@/helper/mailTransporter";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
// import { Handler } from 'next';

// Define the handler function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const baseUrl = process.env.BASE_URL;
	try {
		if (req.method === "GET") {
			const payload = req.query;
			const email = payload.email || "";
			const password = payload.id || "";
			const isReset = payload.reset || "";
			const handyman = payload.handyman || "";
			const craftsmanId = payload.craftsmanId;
			const client = payload.client || "";
			const userDetails = await userDb
				.findOne({ email: email })
				.populate({
					path: "address",
					model: PostalCode,
					select: "Postal_Code",
				});

			if (!userDetails) {
				return res.status(404).json({ message: "User not found" });
			}

			if (!isReset && userDetails.status) {
				res.status(302).redirect(
					`${baseUrl}?email_verification=already_verified`
				);
				return;
			}

			const isMatched = await bcrypt.compare(
				password as string,
				userDetails.otp
			);

			if (isMatched) {
				if (isReset) {
					await userDb.findByIdAndUpdate(userDetails._id, {
						$set: { password: userDetails.otp, otp: "" },
					});
				} else if (handyman || client) {
					let updateData: any = {
						password: userDetails.otp,
						otp: "",
						status: true,
					};
					if (handyman) {
						const craftsman = await Craftsman.findById(craftsmanId);
						if (!craftsman) createError("invalid request", 400);
						await JobAlert.create({
							userId: userDetails._id,
							location: [userDetails.address.Postal_Code],
							keywords: craftsman.services,
						});
						updateData = { ...updateData, craftsman: craftsmanId };
					}
					await userDb.findByIdAndUpdate(userDetails._id, {
						$set: updateData,
					});
					await transporter.sendMail({
						from: "'Handyman'<backenddatabase2023@gmail.com>",
						to: `${email}`,
						subject: `Info: Need Profile verification`,
						html: "<h1>We carefully verify your account.You will not able to perform some action until we verify your profile</h1",
					});
				}

				if (client) {
					await JobPost.updateMany(
						{ userId: userDetails._id, status: "pending" },
						{ $set: { status: "open" } }
					);
				}

				res.status(302).redirect(
					`${baseUrl}/dashboard/${userDetails.role}?email_verification=success&eid=${userDetails.email}&id=${password}&reset=${isReset}&handyman=${handyman}&client=${client}&role=${userDetails.role}`
				);
			} else
				res.status(302).redirect(
					`${baseUrl}/?email_verification=failed`
				);
		} else {
			return res.status(404).json({ message: "Invalid request method" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to verify email" });
	}
};

// Export the handler with the connectDb middleware
export default connectDb(handler);
