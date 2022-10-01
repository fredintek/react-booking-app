import React, { useState } from "react";
import { Navbar, Sidebar } from "../../components";
import "./New.scss";
import NoImg from "./../../assets/noImg.jpg";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { motion } from "framer-motion";

const New = () => {
  const [file, setFile] = useState("");

  // console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : NoImg} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="imgUpload">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  id="imgUpload"
                  type="file"
                  placeholder="john doe"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" />
              </div>

              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="john doe" />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@email.com" />
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+1 234 456 98" />
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elton St. 216 NewYork" />
              </div>

              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>

              <motion.button whileTap={{ scale: 0.8 }}>Send</motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
