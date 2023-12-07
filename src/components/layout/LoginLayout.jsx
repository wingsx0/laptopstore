import React from "react";
import Login from "../auth/Login";
import { useSelector } from "react-redux";
import Signup from "../auth/Signup";
const LoginLayout = () => {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[100px] bg-white rounded shadow-sm p-7 flex items-center justify-between gap-x-3 relative w-[1200px] overflow-hidden">
        <div>
          <header className="mb-5">
            <h2 className="text-5xl font-semibold leading-relaxed">
              Hey,
              <br />
              <span>{isLogin ? "Welcome Back!" : "Have A Good Day"}</span>
            </h2>
            <div>
              {isLogin ? (
                <span className="text-lg font-medium text-gray-400">
                  We are very happy to see you back!
                </span>
              ) : (
                <span className="text-lg font-medium text-gray-400">
                  Join us now!! Guy
                </span>
              )}
            </div>
          </header>
          {isLogin ? <Login></Login> : <Signup></Signup>}
        </div>
        <div className="absolute right-0 rotate-[270deg]">
          <img src="/images/bg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
