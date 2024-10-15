import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

import PasswordInput from "../../components/authentication/PasswordInput";
import EmailInput from "../../components/authentication/EmailInput";
import MobileNumberInput from "../../components/authentication/MobileNumberInput";
import ConfirmPasswordInput from "../../components/authentication/ConfirmPasswordInput";

const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    profilePic: "",
    dob: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  return (
    <div className="pt-1">
      <div className="max-w-xl w-full mx-auto bg-white">
        <form className="w-full flex flex-col items-center border px-5 py-3 shadow-lg rounded-2xl">
          {/* Upload Image Section */}
          <div className="relative mx-auto rounded-full flex justify-center items-center w-[80px] h-[80px] overflow-hidden bg-white">
            <label
              htmlFor="profilePic"
              className="cursor-pointer w-full h-full"
            >
              <div className="w-full h-full flex justify-center items-center border-2 border-black rounded-full">
                {data?.profilePic ? (
                  <img
                    src={data?.profilePic}
                    alt="Sugar Logo"
                    className="rounded-full object-cover w-full h-full"
                  />
                ) : (
                  <FaRegUserCircle className="w-full h-full p-1 text-primary_color" />
                )}
              </div>
              <form>
                <div className="text-[10px] flex justify-center items-center w-full pb-3 bg-gray-100 absolute bottom-0 left-0 text-black">
                  {data?.profilePic ? "Change Image" : "Upload Image"}
                </div>
                <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  className="hidden"
                />
              </form>
            </label>
          </div>

          {/* Name Fields */}
          <div className="w-[80%] flex flex-col sm:flex-row justify-between gap-2 pb-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
              >
                First Name
              </label>
              <div
                className={`flex items-center w-full border rounded-md shadow-sm transition-all duration-200 ease-in-out focus-within:shadow-md focus-visible:border-gray-300`}
              >
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={data?.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  className={`p-3 w-full outline-none rounded-md text-gray-800 placeholder-gray-400`}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
              >
                Last Name
              </label>
              <div
                className={`flex items-center w-full border rounded-md shadow-sm transition-all duration-200 ease-in-out focus-within:shadow-md focus-visible:border-gray-300`}
              >
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={data?.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  className={`p-3 w-full outline-none rounded-md text-gray-800 placeholder-gray-400`}
                />
              </div>
            </div>
          </div>

          {/* Email, Mobile Number, Password and Confirm Password Inputs */}
          <div className="w-[80%]">
            <EmailInput
              data={data}
              setData={setData}
              isValidEmail={isValidEmail}
            />
          </div>
          <div className="w-[80%]">
            <MobileNumberInput data={data} setData={setData} />
          </div>
          <div className="w-[80%] relative">
            <PasswordInput
              data={data}
              setData={setData}
              isValidPassword={isValidPassword}
            />
          </div>
          <div className="w-[80%] relative">
            <ConfirmPasswordInput
              data={data}
              setData={setData}
              isValidConfirmPassword={isValidConfirmPassword}
            />
          </div>

          {/* Register Button */}
          <div className="w-[80%] mx-auto mb-3">
            <button className="w-full py-3 rounded-lg shadow-lg text-white text-lg bg-primary_color transition duration-300 ease-in-out hover:bg-secondary_color">
              Register / Login
            </button>
          </div>

          {/* Login Link */}
          <div className="flex items-center space-x-2">
            <p>Already have an account?</p>
            <Link
              to={"/login"}
              className="text-primary_color font-semibold hover:underline hover:text-secondary_color"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
