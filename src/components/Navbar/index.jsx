import React from "react";
import { useUserData } from "../../hooks/useUserData";
import { ConfigProvider, Dropdown, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { darkAlgorithm } = theme;

const Navbar = () => {
  const { data } = useUserData();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const items = [
    {
      label: <a href={data?.external_urls?.spotify}>Profile</a>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <button onClick={handleLogout}>Log out</button>,
      key: "1",
    },
  ];

  return (
    <div className="w-full rounded-md flex justify-between sticky top-0 z-10 mb-6 backdrop-blur-sm">
      <h1 className="font-black text-3xl">
        Welcome, <span className="font-normal">{data?.display_name}</span>
      </h1>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
        }}
      >
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()} className="h-full">
            <img
              src={data?.images[1].url}
              alt="Profile"
              className="rounded-full h-9"
            />
          </a>
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};

export default Navbar;
