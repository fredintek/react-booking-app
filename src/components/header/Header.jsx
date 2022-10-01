import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import HeaderListItem from "./HeaderListItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [headerList, setHeaderList] = useState([]);
  const [openDateBox, setOpenDateBox] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const checkPural = (num) => {
    if (num > 1) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const listItem = document.querySelectorAll(".headerListItem");
    setHeaderList(listItem);
  }, []);

  const handleHeaderList = (e) => {
    headerList.forEach((item) => item.classList.remove("active"));
    e.target.closest(".headerListItem").classList.add("active");
  };

  const dropDateBox = () => {
    if (openOptions) {
      setOpenOptions(!openOptions);
    }
    setOpenDateBox(!openDateBox);
  };

  const dropOptionsBox = () => {
    if (openDateBox) {
      setOpenDateBox(!openDateBox);
    }
    setOpenOptions(!openOptions);
  };

  const handleOption = (type, direction) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: direction === "i" ? options[type] + 1 : options[type] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div className={`headerContainer ${type === "list" ? "listmode" : ""}`}>
        <div onClick={handleHeaderList} className="headerList">
          <HeaderListItem Icon={HotelIcon} text="Stays" active="active" />
          <HeaderListItem Icon={FlightIcon} text="Flights" />
          <HeaderListItem Icon={CarRentalIcon} text="Car Rentals" />
          <HeaderListItem Icon={AttractionsIcon} text="Attractions" />
          <HeaderListItem Icon={AirportShuttleIcon} text="Airport Taxi" />
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free fredintekbooking account
            </p>
            <motion.button whileTap={{ scale: 0.8 }} className="headerBtn">
              Sign in / Register
            </motion.button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <HotelIcon className="headerIcon" />
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="headerSearchInput"
                  type="text"
                  placeholder="where are you going"
                />
              </div>

              <div className="headerSearchItem">
                <CalendarMonthIcon className="headerIcon" />
                <span onClick={dropDateBox} className="headerSearchText">
                  {`${format(date[0].startDate, "MMM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MMM/dd/yyyy"
                  )}`}
                </span>
                <DateRange
                  className={`dateBox ${openDateBox ? "active" : ""}`}
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              </div>

              <div className="headerSearchItem">
                <GroupIcon className="headerIcon" />
                <span onClick={dropOptionsBox} className="headerSearchText">{`${
                  options.adults
                }-${checkPural(options.adults) ? "adults" : "adult"} ${
                  options.children
                }-${checkPural(options.children) ? "children" : "child"} ${
                  options.rooms
                }-${checkPural(options.rooms) ? "rooms" : "room"}`}</span>

                <div className={`options ${openOptions ? "active" : ""}`}>
                  <div className="optionsItem">
                    <span className="optionsText">Adult</span>
                    <div className="optionsControl">
                      <motion.button
                        disabled={options.adults <= 1}
                        onClick={() => handleOption("adults", "d")}
                        whileTap={{ scale: 0.8 }}
                        className="optionCounterButton"
                      >
                        <RemoveIcon />
                      </motion.button>
                      <span className="optionCounterNumber">
                        {options.adults}
                      </span>
                      <motion.button
                        onClick={() => handleOption("adults", "i")}
                        whileTap={{ scale: 0.8 }}
                        className="optionCounterButton"
                      >
                        <AddIcon />
                      </motion.button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionsText">Children</span>
                    <div className="optionsControl">
                      <motion.button
                        disabled={options.children <= 0}
                        onClick={() => handleOption("children", "d")}
                        whileTap={{ scale: 0.8 }}
                        className="optionCounterButton"
                      >
                        <RemoveIcon />
                      </motion.button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <motion.button
                        onClick={() => handleOption("children", "i")}
                        whileTap={{ scale: 0.8 }}
                        className="optionCounterButton"
                      >
                        <AddIcon />
                      </motion.button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionsText">Room</span>
                    <div className="optionsControl">
                      <motion.button
                        disabled={options.rooms <= 1}
                        onClick={() => handleOption("rooms", "d")}
                        whileTap={{ scale: 0.8 }}
                        className="optionCounterButton"
                      >
                        <RemoveIcon />
                      </motion.button>
                      <span className="optionCounterNumber">
                        {options.rooms}
                      </span>
                      <motion.button
                        onClick={() => handleOption("rooms", "i")}
                        whileTap={{ scale: 0.8 }}
                        className="optionCounterButton"
                      >
                        <AddIcon />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="headerSearchItem">
                <motion.button
                  onClick={handleSearch}
                  whileTap={{ scale: 0.8 }}
                  className="headerBtn"
                >
                  Search
                </motion.button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
