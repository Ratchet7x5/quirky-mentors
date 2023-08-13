import "./App.css";
import SignUp from "./SignUp";
import Search from "./Search";
import About from "./About";
import ProfileSetup from "./ProfileSetup";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile-form" element={<ProfileSetup />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
