import React from "react";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../sagas/authSaga/authSlice";
const Login = () => {
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
          placeholder="Enter your email"
          className="px-4 py-3 border border-gray-200 rounded bg-[#FAFAFC] "
        />
      </div>
      <button className="w-full px-4 py-3 mb-3 font-medium text-white bg-blue-600 rounded">
        Login
      </button>
      <div className="w-full mb-3 h-[1px] bg-gray-300 relative">
        <p className="absolute px-2 bg-white top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
          OR
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center px-4 py-1 border border-gray-300 rounded cursor-pointer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6919 16.9137C24.6919 16.277 24.6303 15.6196 24.5276 15.0034H15.6333V18.6392H20.7275C20.5221 19.81 19.8442 20.8371 18.8377 21.4944L21.8778 23.8566C23.6648 22.1928 24.6919 19.7689 24.6919 16.9137Z"
              fill="#4280EF"
            />
            <path
              d="M15.6349 26.116C18.182 26.116 20.3182 25.2739 21.8794 23.836L18.8393 21.4943C17.9971 22.0695 16.9084 22.3981 15.6349 22.3981C13.17 22.3981 11.0953 20.7343 10.3353 18.5159L7.21307 20.9192C8.81527 24.103 12.0608 26.116 15.6349 26.116Z"
              fill="#34A353"
            />
            <path
              d="M10.3345 18.4954C9.94426 17.3246 9.94426 16.051 10.3345 14.8802L7.21231 12.4564C5.87715 15.1267 5.87715 18.2695 7.21231 20.9193L10.3345 18.4954Z"
              fill="#F6B704"
            />
            <path
              d="M15.6349 10.998C16.97 10.9775 18.2847 11.491 19.2501 12.4154L21.941 9.70395C20.2361 8.10176 17.9766 7.23903 15.6349 7.25957C12.0608 7.25957 8.81527 9.27259 7.21307 12.4564L10.3353 14.8803C11.0953 12.6413 13.17 10.998 15.6349 10.998Z"
              fill="#E54335"
            />
          </svg>
          <span className="text-[#7E8B9E] text-xs">Login with Goggle</span>
        </div>
        <div className="flex items-center px-4 py-1 border border-gray-300 rounded cursor-pointer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2623 15.8329H5.68042V6.25104H15.2623V15.8329Z"
              fill="#F1511B"
            />
            <path
              d="M25.8415 15.8329H16.2599V6.25104H25.8415V15.8329Z"
              fill="#80CC28"
            />
            <path
              d="M15.262 26.4158H5.68042V16.8341H15.262V26.4158Z"
              fill="#07A6F0"
            />
            <path
              d="M25.8415 26.4158H16.2599V16.834H25.8415V26.4158Z"
              fill="#FBBC09"
            />
          </svg>
          <span className="text-[#7E8B9E] text-xs">Login with Microsoft</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center text-base text-[#7E8B9E] font-normal gap-x-1">
          <span>Don't have account?</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => dispatch(setIsLogin(false))}
          >
            Sign up here!
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
