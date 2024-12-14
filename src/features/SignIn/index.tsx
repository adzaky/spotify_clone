import { useNavigate } from "react-router";
import { useSignIn } from "./hooks/useSignIn";

const SignIn = () => {
  const navigate = useNavigate();
  const { handleSignIn } = useSignIn();

  const token = localStorage.getItem("songfy_token");

  const handleSignButton = () => {
    if (token) {
      navigate("/");
    } else {
      handleSignIn();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[url('./assets/signIn-bg.svg')] bg-cover bg-center px-4 text-white">
      <h1 className="text-5xl font-bold lg:text-7xl">Songfy</h1>
      <p className="text-center font-light lg:text-lg">
        Discover, listen to, and enjoy millions of songs from around the world.
      </p>
      <button
        onClick={handleSignButton}
        className="rounded bg-amber-800 px-8 py-2 text-sm font-medium duration-300 hover:bg-amber-700 lg:text-base"
      >
        {token ? "Go To Dashboard" : "Login With Spotify"}
      </button>
    </div>
  );
};

export default SignIn;
