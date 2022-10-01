import React from "react";
import "./NavbarOpt.scss";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";

const NavbarOpt = ({ Icon, text, Img, counter, toggle }) => {
  return (
    <motion.div
      onClick={() => toggle()}
      whileTap={{ scale: 0.8 }}
      className="item"
    >
      {Img && <img src={Img} alt="avatar" className="itemImg" />}
      {Icon && <Icon className="icon" />}
      {text && <span>{text}</span>}
      {counter && <div className="counter">1</div>}
    </motion.div>
  );
};

export default NavbarOpt;
