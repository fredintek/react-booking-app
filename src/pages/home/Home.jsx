import React from "react";
import "./Home.scss";
import {
  Chart,
  Featured,
  Navbar,
  Sidebar,
  TableComp,
  Widget,
} from "./../../components";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" bg="rgba(255, 0, 0, 0.2)" />
          <Widget type="order" bg="rgba(253, 190, 30, 0.2)" />
          <Widget type="earnings" bg="rgba(0, 128, 0, 0.2)" />
          <Widget type="balance" bg="rgba(128, 0, 128, 0.2)" />
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>

        <div className="listContainer">
          <p className="listTitle">Latest Transactions</p>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Home;
