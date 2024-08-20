import Login from "@/components/Login";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

// Modal Styles
const customStyles: Modal.Styles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		maxWidth: "600px",
		width: "100%",
		padding: "20px",
	},
};

// Required by React Modal

interface CraftsmanPortalModalProps {
	isOpen: boolean;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CraftsmanPortalModal: React.FC<CraftsmanPortalModalProps> = ({
	isOpen,
	setModalIsOpen,
}) => {
	React.useEffect(() => {
		// Prevent scrolling on the background when the modal is open
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Cleanup
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	const [isLogin, setIsLogin] = useState(false);
	if (isLogin) {
		return <Login setToggleLogin={setIsLogin} />;
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setModalIsOpen(false)}
			className="overflow-auto mx-auto mt-20 md:my-32 relative p-6 rounded-md bg-white shadow-lg z-100 outline-none max-h-[90vh]"
			overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
			<button
				className="absolute top-5 right-5 text-gray-600 hover:text-red-500 focus:outline-none"
				onClick={() => setModalIsOpen(false)}>
				<FaTimes />
			</button>
			<div className="text-center mt-3">
				<p className="mb-4 font-bold">
					To access more job listings, we invite you to log in or
					create an account.
				</p>

				<div className="flex flex-col gap-4 justify-between">
					<div>
						<h3 className="font-semibold mb-2">
							Already registered?
						</h3>
						<p className="max-w-[300px] m-auto">
							If you already have an account with us, you can log
							in here to continue.
						</p>
						<button
							onClick={() => {
								setIsLogin(true);
								setModalIsOpen(false);
							}}
							className="globalbtn mt-2">
							Login
						</button>
					</div>
					<hr />
					<div>
						<h3 className="font-semibold mb-2">
							Not registered yet?
						</h3>
						<p className="max-w-[300px] mx-auto mb-4">
							No problem! You can easily register as a craftsman
							to access hundreds of jobs and other great features.
						</p>
						<Link href={"/register"} className="globalbtn">
							Register Now For Free
						</Link>
					</div>
				</div>

				<div className="mt-6">
					<h3 className="font-bold  text-left mb-2">
						Why register with us?
					</h3>
					<p className="list-disc text-left list-inside flex flex-col gap-1 font-semibold">
						<span>
							- Access to a variety of job listings from different
							industries and locations.
						</span>
						<span>
							- Personal profile to showcase your skills and
							experience.
						</span>
						<span>
							- Notifications about new jobs that match your
							skills.
						</span>
						<span>
							- Opportunity to connect with potential clients and
							grow your business.
						</span>
					</p>
				</div>
			</div>
		</Modal>
	);
};

export default CraftsmanPortalModal;
