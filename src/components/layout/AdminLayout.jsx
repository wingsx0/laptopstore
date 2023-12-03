import React from "react";
import AdminHeader from "../header/AdminHeader";
import AdminMenu from "../menu/AdminMenu";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div className="p-[40px]">
      <AdminHeader></AdminHeader>
      <div className="flex justify-between">
        <AdminMenu></AdminMenu>
        <div className="w-[1243px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
