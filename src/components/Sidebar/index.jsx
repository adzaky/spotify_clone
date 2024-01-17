import React, { useState } from "react";
import play from "../../assets/gravity-ui_play-fill.svg";
import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdHeadsetMic,
  MdHistory,
  MdMusicNote,
} from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const listRoute = [
    {
      path: "/dashboard",
      title: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/top-artist",
      title: "Top Artist",
      icon: <MdHeadsetMic />,
    },
    {
      path: "/top-music",
      title: "Top Music",
      icon: <MdMusicNote />,
    },
    {
      path: "/recently-played",
      title: "Recently Played",
      icon: <MdHistory />,
    },
  ];

  return (
    <div
      className={`${
        open ? "w-64 p-8" : "w-20 px-6 py-8"
      } flex flex-col gap-y-6 duration-300 h-screen bg-[#1E1E1E] rounded-md`}
    >
      <div
        className={`flex flex-row items-center h-8 mb-2 ${
          open ? "justify-between" : "justify-center"
        }`}
      >
        <h1 className={`text-3xl font-bold ${!open && "hidden"}`}>
          Songfy
        </h1>
        <img
          src={play}
          alt="Play"
          className={`size-5 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        {listRoute.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full p-2 cursor-pointer hover:bg-[#0A68AB] hover:rounded-xl"
              onClick={() => navigate(item?.path)}
            >
              <div className="flex gap-x-8 items-center">
                {item?.icon}
                {open && <h1>{item?.title}</h1>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
