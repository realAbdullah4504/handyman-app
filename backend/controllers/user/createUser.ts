import PostalCode from "@/backend/models/PostalCode";
import userDb from "@/backend/models/userModel";
import { createError } from "@/backend/utils/errorHandler";
import User from "./interface";

const createUser = async (data: User) => {
	try {
		const { name, phone, email, address } = data;
		if (!name || !phone || !email) {
			createError("Name, phone, email are required", 400);
		}

		// check if zipCode exist
		const zip = await PostalCode.findById(address);
		!zip && createError("invalid zip code", 400);

		// Check if user with the given email already exists
		const user = await userDb.findOne({ email });
		if (user) {
			createError("user already exist", 401);
		}

		// Save the new user
		const userData = await new userDb(data).save();
		if (userData) {
			return userData;
		} else return null;
	} catch (error) {
		throw error;
	}
};

export { createUser };

