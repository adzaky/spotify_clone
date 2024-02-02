import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [data, setData] = useState();
  const getMe = async () => {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res?.data);
      console.log("Navbar:", res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="w-full h-20 rounded-xl flex justify-between sticky top-0 z-10">
      <h1 className="font-black text-3xl">
        Welcome, <span className="font-normal">{data?.display_name}</span>
      </h1>
      <img
        src={data?.images[1].url}
        alt="Profile"
        className="rounded-full h-9"
      />
    </div>
  );
};

export default Navbar;
