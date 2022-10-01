import React from "react";
import { motion } from "framer-motion";
import "./Featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { FeaturedOpt } from "./../../components";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <p>Total Revenue</p>
        <motion.div whileTap={{ scale: 0.8 }}>
          <MoreVertOutlinedIcon className="tIcon" />
        </motion.div>
      </div>
      <div className="bottom">
        <div className="progressBar">
          <CircularProgressbar value={70} text={`${70}%`} />
        </div>
        <p className="bTitle">Total sales made today</p>
        <p className="bPrice">$420</p>
        <p className="bText">
          Previous transactions processing. Last payments may not be changed
        </p>
        <div className="bOptions">
          <FeaturedOpt
            text="Target"
            Icon={KeyboardArrowDownOutlinedIcon}
            direction="down"
            num="$12.4"
          />
          <FeaturedOpt
            text="Last week"
            Icon={KeyboardArrowUpOutlinedIcon}
            direction="up"
            num="$12.4"
          />
          <FeaturedOpt
            text="Last Month"
            Icon={KeyboardArrowDownOutlinedIcon}
            direction="down"
            num="$12.4"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
