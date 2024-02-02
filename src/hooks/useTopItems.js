import axios from "axios";
import { useEffect, useState } from "react";

export const useTopItems = (type, limit) => {
  const [genre, setGenre] = useState([]);
  const [topMusics, setTopMusics] = useState([]);
  const getItems = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/top/" + type + "?limit=" + limit,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log("Items", res?.data?.items);
      type === "tracks"
        ? setTopMusics(res?.data?.items)
        : setGenre(res?.data?.items[0]?.genres?.join(","));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, [type]);

  return { genre, topMusics };
};
