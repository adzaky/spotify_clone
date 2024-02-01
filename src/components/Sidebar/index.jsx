import React, { useEffect, useState } from "react";
import play from "../../assets/gravity-ui_play-fill.svg";
import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdHeadsetMic,
  MdHistory,
  MdMusicNote,
} from "react-icons/md";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pathname, setPathname] = useState("");
  const navigate = useNavigate();
  const listRoute = [
    {
      key: "/dashboard",
      label: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      key: "/top-artist",
      label: "Top Artist",
      icon: <MdHeadsetMic />,
    },
    {
      key: "/top-music",
      label: "Top Music",
      icon: <MdMusicNote />,
    },
    {
      key: "/recently-played",
      label: "Recently Played",
      icon: <MdHistory />,
    },
  ];

  useEffect(() => {
    setPathname(window.location.pathname);
    console.log(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={"h-full !bg-[#1E1E1E] rounded-md duration-300"}
      width={240}
    >
      <div
        className={`flex flex-row items-center h-10 m-6 ${
          !collapsed ? "justify-between" : "justify-center"
        }`}
      >
        <h1 className={`text-3xl font-bold ${collapsed && "hidden"}`}>
          Songfy
        </h1>
        <img
          src={play}
          alt="Play"
          className={`size-5 cursor-pointer ${collapsed && "rotate-180"}`}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <hr className="mx-6" />
      <div className="mt-2">
        <Menu
          onClick={({ key }) => navigate(key)}
          items={listRoute}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          className="bg-[#1E1E1E] font-poppins"
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
