import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import I1 from "./../../assets/avatar-1.jpg";

import { NavbarOpt } from "./../../components";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../features/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleMe = () => {
    dispatch(toggleMode());
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div>

        <div className="items">
          <NavbarOpt Icon={LanguageIcon} text="English" />
          <NavbarOpt Icon={DarkModeOutlinedIcon} toggle={toggleMe} />
          <NavbarOpt Icon={FullscreenExitOutlinedIcon} />
          <NavbarOpt counter="counter" Icon={NotificationsNoneOutlinedIcon} />
          <NavbarOpt counter="counter" Icon={ChatBubbleOutlineOutlinedIcon} />
          <NavbarOpt Icon={ListOutlinedIcon} />
          <NavbarOpt Img={I1} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
