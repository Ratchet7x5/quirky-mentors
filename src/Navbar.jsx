import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      showLabels
      sx={{
        backgroundColor: "#e1e1e1",
      }}
    >
      <BottomNavigationAction
        value="/notifications"
        label="Notifications"
        icon={<NotificationsNoneIcon />}
      />
      <BottomNavigationAction
        value="/home"
        label="Home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        value="/search" // Assuming you want this to navigate to a search page.
        label="Search"
        icon={<PersonSearchOutlinedIcon />}
      />
      <BottomNavigationAction
        value="/profile"
        label="Profile"
        icon={<AccountCircleOutlinedIcon />}
      />
    </BottomNavigation>
  );
}

export default Navbar;
