import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import TopArtist from "./pages/TopArtist";
import Dashboard from "./pages/Dashboard";
import Wrapper from "./components/Wrapper";
import TopMusic from "./pages/TopMusic";
import RecentlyPlayed from "./pages/RecentlyPlayed";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Wrapper />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/top-artist" element={<TopArtist />} />
        <Route path="/top-music" element={<TopMusic />} />
        <Route path="/recently-played" element={<RecentlyPlayed />} />
      </Route>
    </Routes>
  );
};

export default App;
