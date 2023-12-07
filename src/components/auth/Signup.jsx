import React from "react";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../sagas/authSaga/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  return (
    <form action="" className="w-[389px]">
      <div className="flex flex-col mb-4 gap-y-2">
        <label htmlFor="" className="text-sm font-medium">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-3 border border-gray-200 rounded bg-[#FAFAFC] "
        />
      </div>
      <div className="flex flex-col mb-4 gap-y-2">
        <label htmlFor="" className="text-sm font-medium">
          Password
        </label>
        <input
          type="text"
          placeholder="Enter your password"
          className="px-4 py-3 border border-gray-200 rounded bg-[#FAFAFC] "
        />
      </div>
      <div className="flex flex-col mb-4 gap-y-2">
        <label htmlFor="" className="text-sm font-medium">
          Confirm password
        </label>
        <input
          type="text"
          placeholder="Enter your password"
          className="px-4 py-3 border border-gray-200 rounded bg-[#FAFAFC] "
        />
      </div>
      <button className="w-full px-4 py-3 mb-3 font-medium text-white bg-blue-600 rounded">
        Login
      </button>
      <div>
        <div className="flex items-center justify-center text-base text-[#7E8B9E] font-normal gap-x-1">
          <span>Already have an account?</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => dispatch(setIsLogin(true))}
          >
            Log in here!
          </span>
        </div>
      </div>
    </form>
  );
};

export default Signup;
