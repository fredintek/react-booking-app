import React from "react";
import "./HeaderListItem.css";

const HeaderListItem = ({ Icon, text, active }) => {
  return (
    <div className={`headerListItem ${active ? "active" : ""}`}>
      {Icon && <Icon />}
      <span>{text}</span>
    </div>
  );
};

export default HeaderListItem;
