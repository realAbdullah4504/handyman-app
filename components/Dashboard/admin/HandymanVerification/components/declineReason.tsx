import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

interface DeclineReasonProps {
	isOpen: boolean;
	onClose: () => void;
	isPending: boolean;
	handleUpdate: (status: string, reason: string) => void;
}

const DeclineReason: FC<DeclineReasonProps> = ({
	isOpen,
	onClose,
	isPending,
	handleUpdate,
}) => {
	const [selectedReason, setSelectedReason] = useState<string>("");
	const [customReason, setCustomReason] = useState<string>("");

	const reasons: string[] = [
		"Incomplete information",
		"Missing Documents",
		"Failure to meet requirements",
		"Violation of Terms of Service",
		"Unclear Service Offering",
		"Security Concerns",
		"Lack of Experience or Qualifications",
		"Past Performance Issues",
		"Other",
	];

	const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedReason(e.target.value);
		if (e.target.value !== "Other") {
			setCustomReason("");
		}
	};

	const handleCustomReasonChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setCustomReason(e.target.value);
	};

	const handleSubmit = () => {
		if (selectedReason === "Other" && customReason.trim() === "") {
			toast.error("Please enter a custom reason.");
			return;
		}
		const finalReason =
			selectedReason === "Other" ? customReason : selectedReason;
		handleUpdate("declined", finalReason);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Decline Reason Modal"
			className="mx-auto relative p-5 my-32 p-6 rounded-md bg-white shadow-lg outline-none"
			overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
			<button
				onClick={onClose}
				className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
				<FaTimes size={20} />
			</button>
			<div className="flex flex-col items-center">
				<h2 className="text-xl font-semibold mb-4">
					Select a reason for decline:
				</h2>
				<select
					value={selectedReason}
					onChange={handleReasonChange}
					className="border p-2 mb-4">
					<option defaultValue={""} value={""}>
						Select a reason
					</option>
					{reasons.map((reason) => (
						<option key={reason} value={reason}>
							{reason}
						</option>
					))}
				</select>
				{selectedReason === "Other" && (
					<input
						type="text"
						placeholder="Enter custom reason"
						value={customReason}
						onChange={handleCustomReasonChange}
						className="border p-2 mb-4 w-full disabled:opacity-50"
					/>
				)}
				<button
					disabled={isPending}
					onClick={handleSubmit}
					className="globalbtn">
					Submit
				</button>
			</div>
		</Modal>
	);
};

export default DeclineReason;
