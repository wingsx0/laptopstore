import React from "react";

const AdminHeader = () => {
  return (
    <div className="h-[52px] mb-[30px]">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-x-[50px] h-full">
          <div>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="52" height="52" rx="10" fill="#2C2F32" />
              <path
                d="M15.186 23.2348C13.8487 20.8914 14.5874 17.9269 16.8359 16.6135C19.0844 15.3001 21.9912 16.135 23.3285 18.4785L29.1985 28.7652C30.5358 31.1086 29.797 34.0731 27.5485 35.3866C25.3001 36.7 22.3932 35.865 21.056 33.5216L15.186 23.2348Z"
                fill="url(#paint0_linear_2186_1501)"
              />
              <path
                d="M39.2349 20.6918C39.2349 23.3235 37.1345 25.457 34.5435 25.457C31.9525 25.457 29.8521 23.3235 29.8521 20.6918C29.8521 18.06 31.9525 15.9265 34.5435 15.9265C37.1345 15.9265 39.2349 18.06 39.2349 20.6918Z"
                fill="url(#paint1_linear_2186_1501)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2186_1501"
                  x1="16.8359"
                  y1="16.6135"
                  x2="27.441"
                  y2="35.002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1DC071" />
                  <stop offset="1" stop-color="#77D9AA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2186_1501"
                  x1="34.5435"
                  y1="15.9265"
                  x2="34.5205"
                  y2="25.2864"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1DC071" />
                  <stop offset="1" stopColor="#77D9AA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center justify-between gap-x-2 h-full px-4 py-1 bg-white rounded w-[450px]">
            <input
              type="text"
              placeholder="What do you want..."
              className="w-full h-full"
            />
            <button className="px-6 py-2 text-white bg-green-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[52px] h-[52px]">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
