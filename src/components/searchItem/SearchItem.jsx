import React from "react";
import "./SearchItem.css";
import { motion } from "framer-motion";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

const SearchItem = ({ Img, Alt }) => {
  return (
    <div className="searchItem">
      <div className="siImgContainer">
        <img
          src={Img ? Img : <ImageNotSupportedIcon />}
          alt={Alt}
          className="siImg"
        />
      </div>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment With Air Conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed{" "}
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Execellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <motion.button whileTap={{ scale: 0.8 }} className="siCheckButton">
            See availability
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
