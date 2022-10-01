import React from "react";
import "./MailList.css";
import { motion } from "framer-motion";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign Up and we'll send the best details to you!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <motion.button whileTap={{ scale: 0.8 }}>Subscribe</motion.button>
      </div>
    </div>
  );
};

export default MailList;
