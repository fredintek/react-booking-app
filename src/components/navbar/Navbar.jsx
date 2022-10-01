import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Fredintek</span>
        <div className="navItems">
          <motion.button whileTap={{ scale: 0.8 }} className="navButton">
            Register
          </motion.button>
          <motion.button whileTap={{ scale: 0.8 }} className="navButton">
            Login
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
