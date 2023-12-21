import React from "react";
import AdminHeader from "../header/AdminHeader";
import AdminMenu from "../menu/AdminMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminLayout = () => {
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state) => state.auth);
  return <Content />;
};

function Content() {
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
}

export default AdminLayout;
