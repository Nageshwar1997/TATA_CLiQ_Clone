import React, { useState } from "react";
import { Link } from "react-router-dom";

import PasswordInput from "../../components/authentication/PasswordInput";
import EmailInput from "../../components/authentication/EmailInput";
import MobileNumberInput from "../../components/authentication/MobileNumberInput";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
  });
  const [loginUsing, setLoginUsing] = useState("mobileNumber");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  return (
    <div className="pt-14">
      <div className="max-w-xl w-full mx-auto bg-white">
        <form className="w-full flex flex-col gap-2 items-center border px-5 py-10 shadow-lg rounded-2xl">
          <h1 className="text-4xl font-bold text-center animate-bounce duration-1000 ease-in-out">
            Welcome to Tata <br /> CL
            <span className="text-primary_color">i</span>Q
          </h1>
          <div className="text-center text-lg mt-2 text-primary_color font-semibold cursor-pointer w-fit">
            {loginUsing === "email" ? (
              <h4 onClick={() => setLoginUsing("mobileNumber")}>
                Use Mobile Number
              </h4>
            ) : (
              <h4 onClick={() => setLoginUsing("email")}>Use Email Address</h4>
            )}
          </div>
          <div className="w-[80%]">
            {loginUsing === "email" ? (
              <EmailInput
                data={data}
                setData={setData}
                isValidEmail={isValidEmail}
              />
            ) : (
              <MobileNumberInput data={data} setData={setData} />
            )}
          </div>
          <div className="w-[80%] relative">
            <PasswordInput
              data={data}
              setData={setData}
              isValidPassword={isValidPassword}
            />
          </div>

          <div className="w-[80%] mx-auto">
            <button className="w-full py-3 rounded-lg shadow-lg text-white text-lg bg-primary_color transition duration-300 ease-in-out hover:bg-secondary_color">
              Login
            </button>
          </div>
          <div className="flex space-x-2">
            <p>Don't have an account?</p>
            <Link
              to={"/register"}
              className="text-primary_color font-semibold hover:underline hover:text-secondary_color"
            >
              Register
            </Link>
          </div>
          <div className="w-[80%] mx-auto text-sm space-y-2 text-justify">
            <p>
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="text-primary_color font-semibold cursor-pointer hover:text-secondary_color hover:underline">
                Privacy Policy{" "}
              </span>
              and{" "}
              <span className="text-primary_color font-semibold cursor-pointer hover:text-secondary_color hover:underline">
                Terms of Service
              </span>{" "}
              apply.
            </p>
            <p>
              By continuing, you agree to our Terms of Use and{" "}
              <span className="text-primary_color font-semibold cursor-pointer hover:text-secondary_color hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
