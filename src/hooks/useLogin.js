import { useEffect, useState } from "react";
import { CLIENT_ID, REDIRECT_URI, SCOPE_PARAM } from "../helpers/config";
import { AUTHORIZE_ENDPOINT } from "../helpers/endpoint";

export const useLogin = () => {
  const [token, setToken] = useState("");

  const handleLogin = () => {
    window.location.href = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_PARAM}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const access_token = params.get("access_token");

    if (access_token) {
      localStorage.setItem("access_token", access_token);
      setToken(access_token);
    }
  }, []);

  return { token, handleLogin };
};
