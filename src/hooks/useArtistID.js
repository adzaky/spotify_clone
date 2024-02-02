import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_ENDPOINT } from "../helpers/endpoint";

export const useArtistID = () => {
  const [artist, setArtist] = useState({});
  const [searchInput, setSearchInput] = useState("Yoasobi");
  const getArtistID = async () => {
    try {
      const res = await axios.get(
        `${BASE_ENDPOINT}search?q=${searchInput}&type=track&limit=18`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setArtist(res?.data);
      console.log("Artist is", res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtistID();
  }, [searchInput]);

  return { artist, searchInput, setSearchInput };
};
