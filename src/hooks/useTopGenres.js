import axios from "axios";
import { useEffect, useState } from "react";

export const useTopGenres = () => {
  const [genre, setGenre] = useState([]);
  const getGenres = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/top/artists?limit=1",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setGenre(res?.data?.items[0]?.genres?.join(","))
      console.log("Genres", res?.data?.items[0]?.genres?.join(","))
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  return { genre };
};
