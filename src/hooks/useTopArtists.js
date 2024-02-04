import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_ENDPOINT } from "../helpers/endpoint";

export const useTopArtists = (genre, limit) => {
  const [topArtists, setTopArtists] = useState([]);

  const getTopArtists = async () => {
    try {
      const res = await axios.get(
        `${BASE_ENDPOINT}recommendations?limit=${limit}&seed_genres=${genre}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setTopArtists(res?.data?.tracks);
      console.log("Top Artists:", res?.data?.tracks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (genre) {
      getTopArtists();
    }
  }, [genre]);

  return { topArtists };
};
