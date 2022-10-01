import React from "react";
import { motion } from "framer-motion";
import "./SidebarCenterOpt.scss";
import { Link } from "react-router-dom";

const SidebarCenterOpt = ({ Icon, text, link }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <motion.li whileTap={{ scale: 0.8 }}>
            {Icon && <Icon className="icon" />}
            <span>{text}</span>
          </motion.li>
        </Link>
      ) : (
        <motion.li whileTap={{ scale: 0.8 }}>
          {Icon && <Icon className="icon" />}
          <span>{text}</span>
        </motion.li>
      )}
    </>
  );
};

export default SidebarCenterOpt;
