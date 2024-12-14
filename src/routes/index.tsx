import { Route, Routes } from "react-router";
import SignInPage from "../pages/sign-in";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
};

export default AppRouter;
