import useChangePassword from "@/hooks/useChangePassword";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
	MdCheckCircle,
	MdRadioButtonUnchecked,
	MdVisibility,
	MdVisibilityOff,
} from "react-icons/md";
import Modal from "react-modal";

interface RegistrationSuccessModalProps {
	isOpen: string;
	setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}

const RegistrationSuccessModal: React.FC<RegistrationSuccessModalProps> = ({
	isOpen,
	setIsOpen,
}) => {
	const closeModal = () => {
		setIsOpen("");
	};

	const {
		securityMessages,
		toggleShowPassword,
		handleSubmit,
		handleChange,
		passwords,
		showPassword,
		confirmPasswordErr,
		isFormBtnEnable,
		isSaving,
		isSuccess,
	} = useChangePassword(isOpen);
	
	useEffect(() => {
		isSuccess && setIsOpen("");
	}, [isSuccess, setIsOpen]);
	return (
		<Modal
			isOpen={isOpen ? true : false}
			// onRequestClose={closeModal}
			contentLabel="Password Change Recommended Modal"
			className="w-96 mx-auto my-32 p-6 rounded-md bg-white shadow-lg outline-none"
			overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
			<div className="relative">
				<button
					className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none"
					onClick={closeModal}>
					<FaTimes />
				</button>
				<h2 className="text-lg font-bold mb-4">
					Password Change Recommended
				</h2>
				<p className="mb-4">
					Welcome! <br />
					You have successfully registered. Please enter your new
					password.
				</p>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-3 justify-between">
					<div>
						<label className="block mb-2 font-bold text-gray-700">
							New Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								name="newPassword"
								value={passwords.newPassword}
								className="w-full border rounded px-3 py-2"
								required
								onChange={handleChange}
							/>
							<span
								className="absolute top-2 right-3 cursor-pointer"
								onClick={toggleShowPassword}>
								{showPassword ? (
									<MdVisibilityOff />
								) : (
									<MdVisibility />
								)}
							</span>
						</div>
					</div>
					<div>
						<label className="block mb-2 font-bold text-gray-700">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							value={passwords.confirmPassword}
							className="w-full border rounded px-3 py-2 "
							onChange={handleChange}
							required
						/>
						<p className="text-red-500 text-sm mt-1">
							{confirmPasswordErr && confirmPasswordErr}
						</p>
					</div>
					<button
						disabled={!isFormBtnEnable || isSaving}
						className="bg-orange disabled:opacity-40 text-white px-4 py-2 rounded focus:outline-none"
						type="submit">
						Save
					</button>

					{!isFormBtnEnable && (
						<div className="mb-3">
							<label className="block font-bold text-gray-700">
								Password Strength
							</label>
							<div className="tex-semibold bg-white rounded p-2">
								{securityMessages.map((item, index) => (
									<p
										key={index}
										className={` ${
											item.isSecure && "text-green-500"
										}`}>
										<span className="inline mr-2">
											{item.isSecure ? (
												<MdCheckCircle className="inline" />
											) : (
												<MdRadioButtonUnchecked className="inline" />
											)}
										</span>
										<span>{item.messsage}</span>
									</p>
								))}
							</div>
						</div>
					)}
				</form>

				{isFormBtnEnable && (
					<>
						<p className="mt-4">
							{`Please note that you have successfully updated your password when you click to 'Save'`}
						</p>
						<p className="mt-4">
							Thank you for your participation!
							<br />
							Handyman team
						</p>
					</>
				)}
			</div>
		</Modal>
	);
};

export default RegistrationSuccessModal;
