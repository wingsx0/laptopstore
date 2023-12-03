import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
const PageLayout = () => {
  return (
    <>
      <Header />
      <div className="w-[1200px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
