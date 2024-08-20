import useReviewsRequests from "@/ApiRequests/reviews";
import Loader from "@/components/Loader";
import moment from "moment";

const TrackReclaim = ({ reclaimId }: { reclaimId: string }) => {
	const { GetReclaimById } = useReviewsRequests();
	const { data, isLoading } = GetReclaimById(reclaimId);
	console.log(data);

	return (
		<div className="max-h-[100px] w-[200px] flex items-center justify-center">
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<h1 className="font-bold mb-2 text-lg">Track Reclaim</h1>
					<p>Status: {data?.decision?.type}</p>
					<p>Reason: {data?.reason}</p>
					<p>Claimed at: {moment(data?.createdAt).format("L")}</p>
				</div>
			)}
		</div>
	);
};
export default TrackReclaim;
