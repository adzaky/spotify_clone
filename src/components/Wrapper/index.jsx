import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const Wrapper = () => {
  return (
    <Layout className="bg-black h-screen flex flex-row font-poppins">
      <div className="flex">
        <div className="ml-2 my-2">
          <Sidebar />
        </div>
      </div>
      <Content className="m-2 bg-gradient-to-b from-[#5B3838] to-[#272626] rounded-md overflow-y-auto p-6 no-scrollbar font-poppins">
        <Navbar />
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Wrapper;
