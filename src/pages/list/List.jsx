import React, { useState } from "react";
import "./List.css";
import { motion } from "framer-motion";
import { Header, Navbar, SearchItem } from "../../components";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import R1 from "./../../assets/room-1.jpg";
import R2 from "./../../assets/room-2.jpg";
import R3 from "./../../assets/room-3.jpg";
import R4 from "./../../assets/room-4.jpg";
import R5 from "./../../assets/room-5.jpg";
import R6 from "./../../assets/room-6.jpg";
import R7 from "./../../assets/room-7.jpg";
import R8 from "./../../assets/room-8.jpg";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDateBox, setOpenDateBox] = useState(false);
  const [price, setPrice] = useState({
    minPrice: "150",
    maxPrice: "150",
  });

  const openLsItemDateBox = () => {
    setOpenDateBox(!openDateBox);
  };

  // console.log(options);
  // console.log(price);

  const updateOptions = (e, name, opt) => {
    if (opt.param === "options") {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: (opt.param[name] = e.target.value),
        };
      });
    } else {
      setPrice((prev) => {
        return {
          ...prev,
          [name]: (opt.param[name] = e.target.value),
        };
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination ? destination : "where are you going?"}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={openLsItemDateBox}>{`${format(
                date[0].startDate,
                "MMM/dd/yyyy"
              )} to ${format(date[0].endDate, "MMM/dd/yyyy")}`}</span>
              <DateRange
                className={`lsItemDateBox ${openDateBox ? "active" : ""}`}
                onChange={(item) => setDate([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>(per night)</small>
                </span>
                <input
                  value={price.minPrice}
                  onChange={(e) =>
                    updateOptions(e, "minPrice", { param: price })
                  }
                  type="number"
                  min={150}
                />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>(per night)</small>
                </span>
                <input
                  value={price.maxPrice}
                  onChange={(e) =>
                    updateOptions(e, "maxPrice", { param: price })
                  }
                  type="number"
                  min={150}
                />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  value={options.adults}
                  onChange={(e) =>
                    updateOptions(e, "adults", { param: options })
                  }
                  type="number"
                  min={1}
                />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  value={options.children}
                  onChange={(e) =>
                    updateOptions(e, "children", { param: options })
                  }
                  type="number"
                  min={0}
                />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  value={options.rooms}
                  onChange={(e) =>
                    updateOptions(e, "rooms", { param: options })
                  }
                  type="number"
                  min={1}
                />
              </div>
            </div>
            <motion.button whileTap={{ scale: 0.8 }} className="lsBtn">
              Search
            </motion.button>
          </div>
          <div className="listResults">
            <SearchItem Img={R1} Alt="room-1" />
            <SearchItem Img={R2} Alt="room-2" />
            <SearchItem Img={R3} Alt="room-3" />
            <SearchItem Img={R4} Alt="room-4" />
            <SearchItem Img={R5} Alt="room-5" />
            <SearchItem Img={R6} Alt="room-6" />
            <SearchItem Img={R7} Alt="room-7" />
            <SearchItem Img={R8} Alt="room-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
