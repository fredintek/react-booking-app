import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProp.css";
import R1 from "./../../assets/room-1.jpg";
import R2 from "./../../assets/room-2.jpg";
import R3 from "./../../assets/room-3.jpg";
import R4 from "./../../assets/room-4.jpg";

const FeaturedProp = () => {
  return (
    <div className="fp">
      <motion.div whileTap={{ scale: 0.8 }} className="fpItem">
        <div className="fpItemImgContainer">
          <img src={R1} alt="room-1" className="fpImg" />
        </div>
        <div className="fpItemContent">
          <span className="fpName">ApartHotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="fpItem">
        <div className="fpItemImgContainer">
          <img src={R2} alt="room-2" className="fpImg" />
        </div>
        <div className="fpItemContent">
          <span className="fpName">ApartHotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="fpItem">
        <div className="fpItemImgContainer">
          <img src={R3} alt="room-3" className="fpImg" />
        </div>
        <div className="fpItemContent">
          <span className="fpName">ApartHotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="fpItem">
        <div className="fpItemImgContainer">
          <img src={R4} alt="room-4" className="fpImg" />
        </div>
        <div className="fpItemContent">
          <span className="fpName">ApartHotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProp;
