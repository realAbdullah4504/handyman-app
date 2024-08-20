import useOfferRequests from "@/ApiRequests/offer";
import Loader from "@/components/Loader";
import { formatTimeDifference } from "@/helper/formatTimeDifference";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const JobDetails = ({ offer_id }: { offer_id: string }) => {
	const { GetSingleOffer } = useOfferRequests();
	const { data, isLoading } = GetSingleOffer(offer_id);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div className="bg-white rounded-lg shadow-md w-full">
					{/* Render job image or default image if no image is available */}
					{data?.job?.images[0] ? (
						<Image
							src={data?.job?.images[0] || "/default-image.jpg"}
							className="w-full object-cover h-auto rounded-t-lg"
							alt="New job post"
							width={500}
							height={500}
							priority
						/>
					) : (
						<div className="flex flex-col justify-center items-center w-full max-h-[240px] object-contain mx-auto bg-[#eaeaea] rounded-md p-3">
							<BsImage size={160} color="#666666" />
							<p className="text-base 2xl:text-lg font-bold opacity-60">
								No image
							</p>
						</div>
					)}
					{/* Job details */}
					<section className="py-3 px-4">
						<h1 className="font-bold text-xl text-orange">
							{data?.job?.category}
						</h1>
						<h1 className="text-black">
							{data?.job?.serviceTitle?.service_title}
						</h1>
						{/* Additional job details */}
						<section className="w-5/5 flex justify-between">
							{/* Left side of additional details */}
							<section className="w-2/5 flex flex-col gap-3 pt-20">
								<span>
									Sq:{" "}
									{
										data?.job?.additional_details
											?.square_meters
									}
									m2
								</span>
								<span>
									Floors:{" "}
									{
										data?.job?.additional_details
											?.how_many_floors
									}
								</span>
								<span>
									Rooms:{" "}
									{
										data?.job?.additional_details
											?.how_many_rooms
									}
								</span>
							</section>
							{/* Right side of additional details */}
							<section className="space-y-2 mt-2 w-3/5">
								<h2 className="font-bold text-xl">
									Description
								</h2>
								<p>{data?.job?.additional_job_description}</p>
							</section>
						</section>
						{/* Location and time details */}
						<div className="flex gap-5 items-center justify-between py-2">
							<div className="flex justify-center items-center gap-2">
								Price : ${data?.price}
							</div>
							<div className="flex justify-center items-center gap-2">
								<CiClock2 />
								<span>
									Posted{" "}
									{data?.job
										? formatTimeDifference(
												data?.job.createdAt
										  )
										: ""}
								</span>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};
export default JobDetails;
