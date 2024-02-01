import axios from "axios";
import { useEffect, useState } from "react";

export const useTopArtists = (genre) => {
  const [topArtists, setTopArtists] = useState([]);

  const getTopArtists = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/recommendations?seed_genres=" + genre,
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
