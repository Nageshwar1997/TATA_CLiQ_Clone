import React, { useState } from "react";
import { Link } from "react-router-dom";

import PasswordInput from "../../components/authentication/PasswordInput";
import EmailInput from "../../components/authentication/EmailInput";
import MobileNumberInput from "../../components/authentication/MobileNumberInput";
import ConfirmPasswordInput from "../../components/authentication/ConfirmPasswordInput";

const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
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
        <form className="w-full flex flex-col items-center border px-5 py-4 shadow-lg rounded-2xl">
          <h1 className="text-4xl font-bold text-center animate-bounce duration-1000 ease-in-out">
            Welcome to Tata <br /> CL
            <span className="text-primary_color">i</span>Q
          </h1>

          <div className="w-[80%] flex justify-between gap-2 pb-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-lg font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
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
                  className={`p-3 w-full outline-none rounded-md text-gray-800 placeholder-gray-400`}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-lg font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
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
                  className={`p-3 w-full outline-none rounded-md text-gray-800 placeholder-gray-400`}
                />
              </div>
            </div>
          </div>
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

          <div className="w-[80%] mx-auto">
            <button className="w-full py-3 rounded-lg shadow-lg text-white text-lg bg-primary_color transition duration-300 ease-in-out hover:bg-secondary_color">
              Register
            </button>
          </div>
          <div className="flex space-x-2">
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
