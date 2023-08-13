import "./App.css";
import SignUp from "./SignUp";
import Search from "./Search";
import About from "./About";
import ProfileSetup from "./ProfileSetup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className='top-0 left-0 h-screen w-screen'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile-form" element={<ProfileSetup />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
