import React from "react";

const HeaderPage = ({ title }) => {
  return (
    <header className="relative">
      <div className="overlay"></div>
      <img
        src="https://images.unsplash.com/photo-1695562768215-06c1c889b014?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-[200px] w-full rounded object-cover"
      />
      <span className="absolute text-4xl font-bold text-white top-2/4 left-2/4 -translate-x-2/4">
        {title || "Plase enter your title."}
      </span>
    </header>
  );
};

export default HeaderPage;
