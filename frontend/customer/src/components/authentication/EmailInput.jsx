import { useState } from "react";
import validateEmail from "../../validators/email.validator";

const EmailInput = ({ data, setData, isValidEmail }) => {
  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      email: value,
    }));
  };

  return (
    <div className="w-full mb-4">
      <label
        htmlFor="email"
        className="block font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
      >
        Email
      </label>
      <div
        className={`flex items-center w-full border rounded-md shadow-sm transition-all duration-200 ease-in-out focus-within:shadow-md focus-visible:border-gray-300 ${
          !isValidEmail && "focus-within:border-red-600"
        }`}
      >
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={data?.email}
          onChange={handleInputChange}
          className={`p-3 w-full outline-none rounded-md placeholder-gray-400 ${
            !isValidEmail && data?.email
              ? "text-primary_color"
              : "text-gray-800"
          }`}
        />
      </div>
      {!isValidEmail && data?.email && (
        <p className="text-primary_color text-xs">Invalid email format.</p>
      )}
    </div>
  );
};

export default EmailInput;
