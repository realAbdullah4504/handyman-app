import connectDb from "@/backend/middleware/db";
import PostalCode from "@/backend/models/PostalCode";
import userDb from "@/backend/models/userModel";
import { createError, errorResponse } from "@/backend/utils/errorHandler";
import getDistanceAggrQuery from "@/helper/aggregateDistanceQuery";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      await GetHandyman(req, res);
      break;
    default:
      res.status(405).json({ error: "Method Not Allowed" });
      break;
  }
}

async function GetHandyman(req: NextApiRequest, res: NextApiResponse) {
  try {
    const service = req.query?.service;
    const pageSize = req.query?.pageSize || 10;
    const pageNumber = req.query?.pageNumber || 1;
    const city = req.query?.city;
    const minRating = req.query.rating;
    let distance = Number(req.query.distance);

    if (!service) {
      return res.status(400).json({ error: "missing service" });
    }

    if (!city) {
      return res.status(400).json({ error: "missing city" });
    }

    const currentPostalCode = await PostalCode.findOne({ Place_Name: city });
    if (!currentPostalCode) {
      return res.status(404).json({ error: "City not found" });
    }

    const currentLatitude = Number(currentPostalCode?.Latitude);
    const currentLongitude = Number(currentPostalCode?.Longitude);

    const distanceAggregation = getDistanceAggrQuery(currentLongitude, currentLatitude);
    const distanceInKiloMeters = distance;
    const distanceCheckAggregation = {
      $match: { distance: { $lte: distanceInKiloMeters } },
    };
    const postalCodesWithinRadius = await PostalCode.aggregate([
      ...distanceAggregation,
      distanceCheckAggregation,
    ]);

    const postalCodeIds = postalCodesWithinRadius.map((doc) => doc._id);

    const serviceString = String(service).split("-").join(" ");
    const lastStage: any = [
      {
        $sort: {
          avgRating: -1,
          "craftsman.statusOrder": 1,
        },
      },
    ];
    if (minRating) {
      lastStage.unshift({
        $match: {
          avgRating: {
            $gte: Number(minRating),
          },
        },
      });
    }
    const results = await userDb.aggregate([
      {
        $match: {
          role: "handyman",
          address: { $in: postalCodeIds },
        },
      },
      {
        $lookup: {
          from: "postalcodes",
          localField: "address",
          foreignField: "_id",
          as: "address",
        },
      },
      {
        $unwind: "$address",
      },
      { $addFields: { admin_name: "$address.Admin_Name" } },
      {
        $lookup: {
          from: "craftsmen",
          localField: "craftsman",
          foreignField: "_id",
          as: "craftsman",
        },
      },
      {
        $unwind: "$craftsman",
      },
      {
        $match: {
          "craftsman.services": {
            $in: [new RegExp(serviceString, "i")],
          },
          "craftsman.status": "verified",
        },
      },
      {
        $lookup: {
          from: "reviews",
          localField: "craftsman.reviews",
          foreignField: "_id",
          as: "reviews",
        },
      },
      {
        $unwind: {
          path: "$reviews",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          profile_photo: { $first: "$profile_photo" },
          address: { $first: "$address" },
          admin_name: { $first: "$admin_name" },
          role: { $first: "$role" },
          craftsman: { $first: "$craftsman" },
          avgRating: { $avg: "$reviews.rating" },
        },
      },
      {
        $addFields: {
          "craftsman.statusOrder": {
            $switch: {
              branches: [
                {
                  case: {
                    $eq: ["$craftsman.status", "verified"],
                  },
                  then: 0,
                },
                {
                  case: {
                    $eq: ["$craftsman.status", "unverified"],
                  },
                  then: 1,
                },
              ],
              default: 2,
            },
          },
        },
      },
      {
        $facet: {
          totalCount: [{ $count: "count" }],
          data: lastStage,
        },
      },
    ]);

    const totalCount = results[0].totalCount[0]?.count || 0;
    const totalPages = Math.ceil(totalCount / Number(pageSize));
    const users = results[0].data;

    const usersWithDistance = users
      .map((user: any) => {
        const postalCode = postalCodesWithinRadius.find(
          (postalCode) =>
            postalCode._id.toString() === user.address._id.toString()
        );
        const distance = postalCode.distance;
        return {
          ...user,
          distance,
        };
      })
      .sort((a: any, b: any) => a.distance - b.distance);

    res.status(200).json({
      users: usersWithDistance,
      totalCount,
      totalPages,
      currentPage: Number(pageNumber),
    });
  } catch (error: any) {
    return errorResponse(res, error);
  }
}

export default connectDb(handler);