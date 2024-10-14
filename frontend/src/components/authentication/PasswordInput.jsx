import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const PasswordInput = ({ data, setData, isValidPassword }) => {
  const { pathname } = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      password: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full mb-4">
      <label
        htmlFor="password"
        className="block font-medium text-gray-800 mb-1 cursor-pointer w-fit hover:text-primary_color"
      >
        Password
      </label>
      <div
        className={`relative flex items-center w-full border rounded-md shadow-sm transition-all duration-200 ease-in-out focus-within:shadow-md focus-visible::border-gray-300 ${
          !isValidPassword && "focus-within:border-red-600"
        }`}
      >
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          value={data?.password}
          onChange={handleInputChange}
          className="p-3 w-full outline-none rounded-md placeholder-gray-400 text-gray-800"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center p-4 text-xl text-gray-500 hover:text-primary_color"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {!isValidPassword && data?.password && (
        <p className="text-primary_color text-xs">Invalid password format.</p>
      )}
      {pathname === "/login" && (
        <p className="hover:text-primary_color font-medium cursor-pointer mt-2">
          Forgot Password?
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
