import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Core/Dashboard/SideBar";
import LogoutModal from "../Components/Core/Dashboard/LogoutModal";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[300px] text-white ">
        <SideBar />
      </div>
      <div className="w-full relative">
        <LogoutModal />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
