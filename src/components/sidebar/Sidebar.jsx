import React from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { SidebarCenterOpt } from "./../../components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { darkMode, lightMode } from "../../features/themeSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Fredintek</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <SidebarCenterOpt Icon={DashboardIcon} text="Dashboard" link="/" />
          <p className="title">LISTS</p>
          <SidebarCenterOpt
            Icon={PersonOutlineIcon}
            text="Users"
            link="/users"
          />
          <SidebarCenterOpt
            Icon={InventoryOutlinedIcon}
            text="Products"
            link="/products"
          />
          <SidebarCenterOpt Icon={Inventory2OutlinedIcon} text="Orders" />
          <SidebarCenterOpt Icon={AirportShuttleIcon} text="Delivery" />
          <p className="title">USEFUL</p>
          <SidebarCenterOpt Icon={LeaderboardIcon} text="Stats" />
          <SidebarCenterOpt Icon={NotificationsNoneIcon} text="Notifications" />
          <p className="title">SERVICES</p>
          <SidebarCenterOpt Icon={MonitorHeartIcon} text="System Health" />
          <SidebarCenterOpt Icon={PsychologyIcon} text="Logs" />
          <SidebarCenterOpt Icon={SettingsIcon} text="Settings" />
          <p className="title">USER</p>
          <SidebarCenterOpt Icon={AccountBoxIcon} text="Profile" />
          <SidebarCenterOpt Icon={ExitToAppIcon} text="Logout" />
        </ul>
      </div>
      <div className="bottom">
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="colorOption"
          onClick={() => dispatch(lightMode())}
        ></motion.div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="colorOption"
          onClick={() => dispatch(darkMode())}
        ></motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
