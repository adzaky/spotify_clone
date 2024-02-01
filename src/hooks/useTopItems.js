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
      // Use ternary operator to conditionally set state based on type
      type === "tracks"
        ? setTopMusics(res?.data?.items) // Set music state if type is "Musics"
        : setGenre(res?.data?.items[0]?.genres?.join(",")); // Set genre state otherwise
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, [type]);

  return { genre, topMusics };
};
