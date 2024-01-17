import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Wrapper = () => {
  return (
    <div className="bg-black p-2">
      <div className="flex gap-x-2">
        <Sidebar />
        <div className="flex-1 h-screen bg-gradient-to-b from-[#5B3838] to-[#272626] rounded-md p-8">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
