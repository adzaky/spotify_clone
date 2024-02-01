import axios from "axios";
import { useState } from "react";

export const useRecentlyPlayed = () => {
  const [data, setData] = useState([]);
  const getRecentlyPlayed = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/player/recently-played",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setData(res?.data.items);
      console.log(res?.data.items);
    } catch (err) {
      console.log(err);
    }
  };
  return {data, getRecentlyPlayed}
};
