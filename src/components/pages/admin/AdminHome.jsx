import React from "react";
import PopularList from "../../listProduct/PopularList";
import AdminList from "../../listProduct/AdminList";

const AdminHome = () => {
  return (
    <div>
      <header className="mb-[30px]">
        <h3 className="mb-5 text-lg font-semibold">Your Campaign (4)</h3>
        <div className="flex items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1686090450467-3212162803e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
            alt=""
            className="w-[583px] h-[266px] rounded object-cover mr-[30px]"
          />
          <div className="w-[435px]">
            <div className="flex items-center mb-4 gap-x-[10px]">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2186_456)">
                    <path
                      d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
                      fill="#808191"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2186_456">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-sm font-medium">Architecture</span>
            </div>
            <h3 className="text-[20px] font-semibold mb-4">
              Remake - We Make architecture exhibition
            </h3>
            <p className="mb-5 text-sm">
              Remake - We Make: an exhibition about architecture's social agency
              in the face of urbanisation
            </p>
            <div className="bg-[#4ACD8D] h-[5px] rounded mb-5"></div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">$2,000</span>
                <span className="text-base">Raised of $2,500</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">$2,000</span>
                <span className="text-base">Raised of $2,500</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">$2,000</span>
                <span className="text-base">Raised of $2,500</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AdminList title={"Popular Campaign"}></AdminList>
    </div>
  );
};

export default AdminHome;
