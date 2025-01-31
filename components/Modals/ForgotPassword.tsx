import useAuthRequests from "@/ApiRequests/auth";
import { useAuth } from "@/context/AuthContext";
import { useLogout } from "@/hooks/logout";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaPowerOff, FaTimes } from "react-icons/fa";
import Modal from "react-modal";

export interface ModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
	const closePopup = () => {
		setIsOpen(false);
	};
	const logout = useLogout();
	const [email, setEmail] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const { userData } = useAuth();
	const { resetPassword } = useAuthRequests();
	const handleReset = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await resetPassword.mutateAsync(
				{ email },
				{
					onSuccess(data, variables, context) {
						toast.success(data.message);
						closePopup();
					},
				}
			);
		} catch (error: any) {
			console.log(error);
			if (error.response) {
				const { data } = error.response;
				toast.error(data.message);
			} else toast.error(error.message);
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			// onRequestClose={closeModal}
			contentLabel="Password Change Recommended Modal"
			className="w-96 mx-auto my-32 p-6 rounded-md bg-white shadow-lg z-100 outline-none"
			overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
			<div className="relative">
				<button
					className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none"
					onClick={closePopup}>
					<FaTimes />
				</button>
				<h2 className="text-lg font-bold mb-4">Welcome back!</h2>
				<p className="mb-4">
					<br />
					You are already registered and logged in. No re-registration
					is required. If you have forgotten your password, you can
					reset it here. Otherwise, feel free to explore our Homepage
					or use navigation to access your dashboard.
				</p>

				<div className="flex items-center justify-center ">
					<form onSubmit={handleReset}>
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
							required
							onChange={handleChange}
						/>
						<button
							type="submit"
							disabled={resetPassword.isPending}
							className="bg-orange hover:bg-orange disabled:opacity-40 text-white font-bold py-2 px-4 rounded-full w-50">
							Send Password Reset Email
						</button>
					</form>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<Link
						href={`/dashboard/${userData[0]?.role}`}
						className="bg-orange text-center hover:bg-orange disabled:opacity-40 text-white font-bold py-2 px-4 rounded-full w-50">
						Go to Dashboard
					</Link>
					<button
						onClick={closePopup}
						className="bg-orange hover:bg-orange text-center  disabled:opacity-40 text-white font-bold py-2 px-4 rounded-full w-50">
						Homepage
					</button>
					<button
						onClick={() => (closePopup(), logout())}
						className="bg-orange flex items-center  hover:bg-orange justify-center gap-2 disabled:opacity-40 text-white font-bold py-2 px-4 rounded-full w-50">
						{" "}
						<FaPowerOff />
						Logout
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ForgotPassword;
