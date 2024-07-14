import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../App.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="inter flex justify-center flex-col">
      <div className="w-11/12 p-4 pt-8">
        <h1 className="text-black text-3xl font-semibold mb-2">
          Create your new <br /> account.
        </h1>
        <p className="text-[#878787] text-sm font-medium">
          Create an account to start looking for the food you like{" "}
        </p>
      </div>
      <form>
        <div className="w-full p-4 flex flex-col justify-center ">
          <label className=" text-sm font-medium m-1">Email Adress</label>
          <input
            type="email"
            className="w-full p-4 border-2 border-[#d6d6d6] outline-[#d6d6d6] rounded-md"
          />
          <label className=" text-sm font-medium mt-4 mb-1">User Name</label>
          <input
            type="text"
            className="w-full p-4 border-2 border-[#d6d6d6] outline-[#d6d6d6] rounded-md"
          />
          <label className=" text-sm font-medium mt-4 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-4 border-2 border-[#d6d6d6] outline-[#d6d6d6] rounded-md pr-10"
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 "
              onClick={handlePasswordShow}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.50001 1.5L4.49098 4.49097M16.5 16.5L13.5093 13.5093M10.5624 14.6872C10.0564 14.7831 9.53428 14.8333 9.00039 14.8333C5.26902 14.8333 2.11043 12.3809 1.04855 8.99997C1.33763 8.07958 1.7821 7.22801 2.35121 6.47598M7.23224 7.23223C7.68465 6.77982 8.30965 6.5 9.00001 6.5C10.3807 6.5 11.5 7.61929 11.5 9C11.5 9.69036 11.2202 10.3154 10.7678 10.7678M7.23224 7.23223L10.7678 10.7678M7.23224 7.23223L4.49098 4.49097M10.7678 10.7678L4.49098 4.49097M10.7678 10.7678L13.5093 13.5093M4.49098 4.49097C5.79083 3.65295 7.33881 3.16667 9.00038 3.16667C12.7318 3.16667 15.8903 5.61909 16.9522 9.00003C16.3631 10.8756 15.1288 12.4654 13.5093 13.5093"
                  stroke="#101010"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <span className="m-4 mt-8 mb-8  flex flex-row items-center justify-center gap-4">
            <input
              type="checkbox"
              className="custom-checkbox transform scale-150"
            />
            <p>
              I Agree with{" "}
              <span className="text-[#FE8C00]">Terms of Service</span> and{" "}
              <span className="text-[#FE8C00]">Privacy Policy</span>
            </p>
          </span>
          <input
            type="submit"
            value="Register"
            className="w-full p-4 bg-[#FE8C00] text-white font-medium rounded-full cursor-pointer"
          />
        </div>
      </form>
      <div className="w-full flex justify-center items-center flex-col ">
        <span className="w-4/5 mt-4 flex flex-row items-center justify-center space-x-2">
          <hr className="flex-grow border-[0.5] border-[#a5a5a5] " />
          <p className="text-[#878787]">Or sign in with</p>
          <hr className="flex-grow border=[0.5] border-[#a5a5a5]" />
        </span>
        <GoogleLogin
          clientId="349072461760-4r1smqf00o58mi0nougeop5gilvo2clb.apps.googleusercontent.com"
          onSuccess={responseMessage}
          onFailure={errorMessage}
          cookiePolicy={"single_host_origin"}
        />
      </div>

      <div className="w-full mt-4 p-4 flex justify-center">
        <p className=" text-sm font-medium">
          Have an account?{" "}
          <Link to="/login">
            <span className="text-[#FE8C00]">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;