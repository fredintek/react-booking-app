import React from "react";
import "./Home.css";
import {
  Featured,
  FeaturedProp,
  Footer,
  Header,
  MailList,
  Navbar,
  PropertyList,
} from "./../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProp />

        <MailList />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
