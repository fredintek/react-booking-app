import React from "react";
import { motion } from "framer-motion";
import "./Featured.css";
import T1 from "./../../assets/travel-1.jpg";
import T2 from "./../../assets/travel-2.jpg";
import T3 from "./../../assets/travel-3.jpg";
import T4 from "./../../assets/travel-4.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <motion.div whileTap={{ scale: 0.8 }} className="featuredItem">
        <img src={T1} alt="travel-1" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Lagos</h2>
          <h4>654 properties</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="featuredItem">
        <img src={T2} alt="travel-2" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Alaska</h2>
          <h4>424 properties</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="featuredItem">
        <img src={T3} alt="travel-3" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Dublin</h2>
          <h4>220 properties</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="featuredItem">
        <img src={T4} alt="travel-4" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Japan</h2>
          <h4>398 properties</h4>
        </div>
      </motion.div>
    </div>
  );
};

export default Featured;
