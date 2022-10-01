import React, { useState } from "react";
import { Footer, Header, MailList, Navbar } from "./../../components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import H1 from "./../../assets/hotel-1.jpg";
import H2 from "./../../assets/hotel-2.jpg";
import H3 from "./../../assets/hotel-3.jpg";
import H4 from "./../../assets/hotel-4.jpg";
import H5 from "./../../assets/hotel-5.jpg";
import H6 from "./../../assets/hotel-6.jpg";
import { motion } from "framer-motion";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./Hotel.css";

const Hotel = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const photos = [H1, H2, H3, H4, H5, H6];

  const handleSlideEvent = (num) => {
    setOpenSlider(!openSlider);
    setSlideNum(num);
  };

  const handleImgSwiper = (name) => {
    let newSlideNum;
    if (name === "back") {
      newSlideNum = slideNum === 0 ? photos.length - 1 : slideNum - 1;
    } else {
      newSlideNum = slideNum === photos.length - 1 ? 0 : slideNum + 1;
    }
    setSlideNum(newSlideNum);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlider && (
          <div className="slider">
            <HighlightOffIcon
              onClick={() => setOpenSlider(!openSlider)}
              className="close"
            />
            <ArrowCircleLeftRoundedIcon
              className="back"
              onClick={() => handleImgSwiper("back")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNum]} alt="" className="sliderImg" />
            </div>
            <ArrowCircleRightRoundedIcon
              className="front"
              onClick={() => handleImgSwiper("front")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <div className="hotelhead">
            <h1 className="hotelTitle">Grand Hotel</h1>
            <motion.button whileTap={{ scale: 0.8 }} className="bookNow">
              Reserve or Book Now!
            </motion.button>
          </div>
          <div className="hotelAddress">
            <LocationOnIcon />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Execellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                onClick={() => handleSlideEvent(idx)}
                whileTap={{ scale: 0.8 }}
                className="hotelImgWrapper"
              >
                <img src={photo} alt="" className="hotelImg" />
              </motion.div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of krakov</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                atque iusto quis eaque fugiat dolor suscipit maxime optio eos
                expedita enim, aperiam harum cum sed ducimus tempore vitae
                reiciendis provident! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugiat aperiam ducimus assumenda
                exercitationem quo, fugit, quidem commodi totam ex doloremque
                ratione suscipit. Quo libero, ab at tempora quia voluptatem
                quibusdam?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakov, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <motion.button whileTap={{ scale: 0.8 }}>
                Reserve or Book Now!
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
