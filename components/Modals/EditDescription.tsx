import React, { ChangeEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

interface EditBusinessTextProps {
  isOpen: boolean;
  onClose: () => void;
  currentDescription: string;
  onUpdateDescription: (newDescription: string) => void;
}

const EditBusinessText: React.FC<EditBusinessTextProps> = ({
  isOpen,
  onClose,
  currentDescription,
  onUpdateDescription,
}) => {
  const [newDescription, setNewDescription] = useState(currentDescription);
  const [descriptionLengthError, setDescriptionLengthError] = useState(false);

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value);
  };

  const handleUpdateDescription = () => {
    // You can perform any validation or additional logic here before updating
    if (newDescription.length < 50) {
      setDescriptionLengthError(true);
      return;
    }
    onUpdateDescription(newDescription);
    setDescriptionLengthError(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onClose}
      className="mx-auto relative p-5 my-32 p-6 rounded-md bg-white shadow-lg outline-none"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <FaTimes size={20} />
      </button>

      <div className="">
        <h2 className="font-bold text-xl pb-2">Update Business Description</h2>
        <textarea
          id="description"
          rows={15}
          className="border p-3 rounded"
          cols={50}
          value={newDescription}
          onChange={handleDescriptionChange}
        />
        {descriptionLengthError && (
          <p className="text-red-500 text-sm">
            Your description is too short. Please provide at least 50
            characters.
            <br /> (Current: {newDescription.length} characters)
          </p>
        )}
        <div className="flex justify-end mt-5">
          <button
            // disabled={
            // 	UpdateCraftman.isPending || selectCard.length === 0
            // }
            onClick={handleUpdateDescription}
            className={`bg-orange text-white lg:px-5 lg:py-2 px-3 py-1.5 rounded-xl
                font-medium focus:outline-none float-right disabled:cursor-not-allowed 
                disabled:opacity-50`}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditBusinessText;
