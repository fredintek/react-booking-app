import React from "react";
import "./FeaturedOpt.scss";

const FeaturedOpt = ({ text, Icon, num, direction }) => {
  return (
    <div className="featuredOpt">
      <p className="foTitle">{text}</p>
      <div className="values">
        {Icon && (
          <Icon
            style={{ color: `${direction === "up" ? "green" : "red"}` }}
            className="icon"
          />
        )}
        <p
          style={{ color: `${direction === "up" ? "green" : "red"}` }}
          className="foNum"
        >{`${num}k`}</p>
      </div>
    </div>
  );
};

export default FeaturedOpt;
