import useUserRequests from "@/ApiRequests/user";
import ChangeProfilePhoto from "@/components/Dashboard/components/ChangeProfilePhoto";
import { useAuth } from "@/context/AuthContext";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

export type InputdDataType = {
  streetAddress?: string;
  company_name: string;
  name: string;
  last_name: string;
  email: string;
  zipCode: string;
  phone: string;
  address: string;
};

export default function EditProfile() {
  const { userData, getLoginUser } = useAuth();
  console.log(userData);
  const user = userData[0];
  const [zip_codeError, setZipCodeError] = useState<string>("");
  const { UpdateUser } = useUserRequests();

  const initialInput = {
    id: user?._id || "",
    company_name: user?.craftsman?.company_name || "",
    name: user?.name || "",
    last_name: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    zipCode: user?.address?.Postal_Code.toString() || "",
    address: user?.address?.Place_Name || "",
    streetAddress: user?.streetAddress || "",
  };

  const [inputData, setInputData] = useState<InputdDataType>(initialInput);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputData.zipCode) {
      setZipCodeError("Zip code is required");
    } else if (isNaN(Number(inputData.zipCode))) {
      setZipCodeError("Zip code must be a number");
    } else setZipCodeError("");
    if (zip_codeError === "") {
      // console.log(inputData);
      // console.log(imageDataPageData);
    }
	
	if(!inputData.phone){
		toast.error("Please enter your phone number");
		return;
	}


    try {
      let updateData: any = {
        id: user?._id,
        phone: inputData.phone,
      };


      // user update api request
      await UpdateUser.mutateAsync(updateData, {
        onSuccess(data) {
          toast.success(data.message);
          getLoginUser();
        },
      });
    } catch (error: any) {
      const errorRes = error.response.data;
      if (errorRes) {
        toast.error(errorRes.error);
      } else toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row">
      <ChangeProfilePhoto />
      <form method="POST" className="flex-grow" onSubmit={handleSubmit}>
        <div className=" mx-auto  p-4 lg:p-8 ">
          <div className="grid md:grid-cols-2 gap-4  ">
            <div className="">
              <label className="block mb-2 font-bold text-gray-700">
                First Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                disabled
                name="name"
                className="w-full border rounded px-3 py-2 "
                placeholder={`${inputData.name || " Enter your first name"}`}
              />
            </div>
            <div className="">
              <label className="block mb-2 font-bold text-gray-700">
                Last Name
              </label>
              <input
                name="last_name"
                onChange={handleChange}
                type="text"
                disabled
                className="w-full border rounded px-3 py-2"
                placeholder={`${inputData.last_name || "Enter your last name"}`}
              />
            </div>
            <div className="">
              <label className="block mb-2 font-bold text-gray-700">
                Company Name
              </label>
              <input
                name="company_name"
                type="text"
                disabled
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder={`${
                  inputData.company_name || "Enter your company name"
                }`}
              />
            </div>
            <div className="relative">
              <label className="block mb-2 font-bold text-gray-700">
                Zip Code
              </label>
              <input
                name="zipCode"
                disabled
                onChange={handleChange}
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder={`${inputData.zipCode || "Enter zipcode "}`}
              />
              <span className="absolute right-2 top-10 text-gray-500">
                {inputData.address}
              </span>
            </div>
            <div className="">
              <label className="block mb-2 font-bold text-gray-700">
                Email
              </label>
              <input
                disabled
                name="email"
                type="email"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder={`${inputData.email || "Enter your email"}`}
              />
            </div>
            <div className="">
              <label className="block mb-2 font-bold text-gray-700">
                Phone
              </label>
              <input
                name="phone"
                onChange={handleChange}
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder={`${inputData.phone || "Enter phone number"}`}
				value={inputData.phone || ""}
              />
            </div>

            <div className="">
              <label className="block mb-2 font-bold text-gray-700">
                Street Address
              </label>
              <input
                name="address"
                disabled
                onChange={handleChange}
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder={`${inputData?.streetAddress || "Enter address "}`}
              />
            </div>
            <button
              type="submit"
              disabled={UpdateUser.isPending}
              className="bg-orange w-fit h-fit mt-auto ms-auto text-white lg:px-5 px-3 py-1.5 rounded-xl font-medium focus:outline-none "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
