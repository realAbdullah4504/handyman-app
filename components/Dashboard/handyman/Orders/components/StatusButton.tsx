import useUpdateJobpost from "@/hooks/useUpdateJob";
import React from "react";
import { FaCheck, FaTimesCircle, FaTrash } from "react-icons/fa";

interface StatusButtonProps {
	status: string;
	jobId?: string;
	getUserPostedJobFN?: () => Promise<void>;
	showIcons?: boolean;
	showEditIcon?: boolean;
	setIsEdit?: any;
	onEditClick?: () => void; // Define the onEditClick prop function
}

const StatusButton: React.FC<StatusButtonProps> = ({
	showIcons = true,
	showEditIcon = true,
	jobId,
	status,
	setIsEdit,
	// onEditClick,
	// getUserPostedJobFN,
}) => {
	const getStatusStyles = () => {
		let styles =
			"rounded px-3 py-1 cursor-pointer flex gap-2 items-center capitalize";

		if (status === "completed") {
			styles += " bg-[#ff691880]";
		} else if (["close", "rejected"].includes(status)) {
			styles += " bg-[#FA4017] text-white";
		} else if (["pending", "open"].includes(status)) {
			styles += " bg-[#67B554]";
		} else if (status === "accepted") {
			styles += " bg-[#fff61880]";
		}else if(status === 'withdrawn'){
			styles += " bg-gray-500 text-white";
		}
		return styles;
	};

	const getStatusIcon = () => {
		if (status === "completed" || ["pending", "open"].includes(status)) {
			return <FaCheck className="mr-1" />;
		} else if (["close", "rejected"].includes(status)) {
			return <FaTimesCircle className="mr-1" />;
		}
	};

	const { handleUpdateJobPost, isLoading } = useUpdateJobpost(() => {});

	const handleClose = () => {
		try {
			setIsEdit("status");
		} catch (error) {
			console.log(error);
		}
	};

	const isClientSide = typeof window !== "undefined";

	return (
		<div className="flex items-center gap-2">
			{((showEditIcon && showIcons) ||
				(["pending", "open"].includes(status) && showIcons)) && (
				<span className="flex gap-1">
					{status === "open" && (
						<FaTrash
							style={{ cursor: "pointer" }}
							fontSize={20}
							onClick={handleClose}
						/>
					)}

					{/* <FaEdit
						style={{ cursor: "pointer" }}
						fontSize={20}
						// onClick={handleEditClick}
					/> */}
				</span>
			)}
			<div className={getStatusStyles()}>
				{["pending", "open"].includes(status) &&
				isClientSide &&
				!window.location.pathname.includes("/client")
					? "Request Open"
					: status}
				{getStatusIcon()}
			</div>
		</div>
	);
};

export default StatusButton;
