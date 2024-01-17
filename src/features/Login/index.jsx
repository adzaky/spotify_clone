import { useEffect, useState } from "react";
import {
  AUTHORIZE_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE_PARAM,
} from "../../helpers/config";
import { useNavigate } from "react-router-dom";

const LoginFeatures = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

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

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-[url('.\assets\loginBg.svg')] bg-cover bg-center">
        <h1 className="text-[3.75rem] font-bold mb-4">Songfy</h1>
        <p className="font-light -mt-6">
          Discover, listen to, and enjoy millions of songs from around the
          world.
        </p>
        <button
          onClick={() => {
            token ? navigate("/dashboard") : handleLogin();
          }}
          className="rounded-[5px] bg-[#0A68AB] hover:bg-[#1c8ddd] transition-all mt-2 px-8 py-2"
        >
          {token ? "Go To Dashboard" : "Login With Spotify"}
        </button>
      </div>
    </>
  );
};

export default LoginFeatures;
