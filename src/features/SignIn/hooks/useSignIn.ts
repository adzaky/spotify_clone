import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { SIGNIN } from "../../../lib/endpoint";

export const useSignIn = () => {
  const [searchParams] = useSearchParams();

  const handleSignIn = () => {
    window.location.assign(SIGNIN);
  };

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    if (accessToken) {
      localStorage.setItem("songfy_token", accessToken);
    }
  }, [searchParams]);

  return { handleSignIn };
};
