import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const ConfirmPasswordInput = ({ data, setData, isValidConfirmPassword }) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      confirmPassword: value,
    }));
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="w-full mb-4">
      <label
        htmlFor="confirmPassword"
        className="block font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
      >
        Confirm Password
      </label>
      <div
        className={`relative flex items-center w-full border rounded-md shadow-sm transition-all duration-200 ease-in-out focus-within:shadow-md focus-visible::border-gray-300 ${
          !isValidConfirmPassword && "focus-within:border-red-600"
        }`}
      >
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="Enter confirm password"
          value={data?.confirmPassword}
          onChange={handleInputChange}
          className="p-3 w-full outline-none rounded-md placeholder-gray-400 text-gray-800"
        />
        <button
          type="button"
          onClick={toggleConfirmPasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center p-4 text-xl text-gray-500 hover:text-primary_color"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {!isValidConfirmPassword && data?.confirmPassword && (
        <p className="text-primary_color text-xs">Invalid password format.</p>
      )}
      {data?.confirmPassword !== data?.password && (
        <p className="text-primary_color text-xs">Password does not match.</p>
      )}
    </div>
  );
};

export default ConfirmPasswordInput;
