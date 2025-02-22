import mongoose, { ConnectOptions } from "mongoose";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

// Define the type for the cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Ensure MONGO_URL is provided
const MONGODB_URI: string | undefined = process.env.NEXT_MONGO_URL;
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

// Use global object to persist the database connection across hot reloads in dev mode
declare global {
  var mongoose: MongooseCache | undefined;
}

// Create a cache object to store connection state
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

const connectDb = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!cached.conn) {
      if (!cached.promise) {
        const options: ConnectOptions = {
          bufferCommands: false,
          maxPoolSize: 10, // Manages concurrent connections efficiently
          serverSelectionTimeoutMS: 5000,
          socketTimeoutMS: 45000,
          family: 4
        };

        mongoose.set("strictQuery", true);
        cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => mongoose);
      }
      
      cached.conn = await cached.promise;
    }

    return handler(req, res);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
};

// Store the cached connection in the global scope for hot reloads in development
global.mongoose = cached;

export default connectDb;