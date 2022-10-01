import React from "react";
import { motion } from "framer-motion";
import "./PropertyList.css";
import Hotel1 from "./../../assets/hotel-1.jpg";
import Apartment1 from "./../../assets/apartment-1.jpg";
import Cabin1 from "./../../assets/cabin-1.jpg";
import Villa1 from "./../../assets/villa-1.jpg";
import Resort1 from "./../../assets/resort-1.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
      <motion.div whileTap={{ scale: 0.8 }} className="pListItem">
        <div className="pListImgContainer">
          <img src={Hotel1} alt="" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h2>Hotels</h2>
          <h4>232 Hotels</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="pListItem">
        <div className="pListImgContainer">
          <img src={Apartment1} alt="" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h2>Apartments</h2>
          <h4>329 Apartment2</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="pListItem">
        <div className="pListImgContainer">
          <img src={Villa1} alt="" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h2>Villas</h2>
          <h4>148 Villas</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="pListItem">
        <div className="pListImgContainer">
          <img src={Cabin1} alt="" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h2>Cabins</h2>
          <h4>67 Cabins</h4>
        </div>
      </motion.div>

      <motion.div whileTap={{ scale: 0.8 }} className="pListItem">
        <div className="pListImgContainer">
          <img src={Resort1} alt="" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h2>Resorts</h2>
          <h4>105 Resorts</h4>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyList;
