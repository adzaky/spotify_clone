import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const LoginFeatures = () => {
  const { token, handleLogin } = useLogin();
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-[url('./assets/loginBg.svg')] bg-cover bg-center">
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
