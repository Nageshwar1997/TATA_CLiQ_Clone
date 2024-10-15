import { useState } from "react";
import validateMobileNumber from "../../validators/mobileNumber.validator";

const MobileNumberInput = ({ data, setData }) => {
  const [isValidMobile, setIsValidMobile] = useState(true);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length === 10 || value.length === 1) {
      setIsValidMobile(validateMobileNumber(value));
    }

    if (value.length <= 10) {
      setData((prev) => {
        return {
          ...prev,
          mobileNumber: value,
        };
      });
    }
  };

  return (
    <div className="w-full mb-4">
      <label
        htmlFor="mobileNumber"
        className="block font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
      >
        Mobile Number
      </label>
      <div
        className={`flex items-center w-full border rounded-md shadow-sm transition-all duration-200 ease-in-out focus-within:shadow-md focus-visible:border-gray-300 ${
          !isValidMobile && "focus-within:border-red-600"
        }`}
      >
        <div className="border-r-2 py-3 px-3 flex items-center bg-gray-200 text-gray-700 font-semibold rounded-tl-md rounded-bl-md">
          +91
        </div>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="9876543210"
          value={data?.mobileNumber}
          onChange={handleInputChange}
          className={`p-3 w-full rounded-r-md outline-none placeholder-gray-400 ${
            !isValidMobile && data?.mobileNumber
              ? "text-primary"
              : "text-gray-800"
          }`}
        />
      </div>

      {!isValidMobile && data?.mobileNumber && (
        <p className="text-primary_color text-xs">
          Invalid mobile number format.
        </p>
      )}
    </div>
  );
};

export default MobileNumberInput;
