import React from "react";
import { Chart, Navbar, Sidebar, TableComp } from "../../components";
import "./Single.scss";
import { motion } from "framer-motion";
import P9 from "./../../assets/p9.jpg";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <motion.p whileTap={{ scale: 0.8 }}>Edit</motion.p>
            <h3>Information</h3>
            <div className="leftContent">
              <div className="lcImg">
                <img src={P9} alt="" />
              </div>
              <div className="lcText">
                <h2>Jane Doe</h2>
                <p className="lcTextEmail">Email: janedoe@email.com</p>
                <p className="lcTextPhone">Phone: +1 745 768</p>
                <p className="lcTextAddress">
                  Address: Elton St. 234 Garden yd. New York
                </p>
                <p className="lcTextCountry">Country: USA</p>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spendings (Last 6 Month)" />
          </div>
        </div>
        <div className="bottom">
          <h3>Last Transactions</h3>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Single;
