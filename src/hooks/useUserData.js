import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_ENDPOINT } from "../helpers/endpoint";

export const useUserData = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const getMe = async () => {
    try {
      const res = await axios.get(`${BASE_ENDPOINT}me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res?.data);
      console.log("Navbar:", res?.data);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return { data };
};
