import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(true);


 const sidebarVariants = {
    true: {
      left: "0"
    },
    false:{
      left: "-60%"
    }
  }

  return (
    <>
      <div className="bars" style={open ? { left: "60%" } : { left: "5%" }}
        onClick={() => setOpen(!open)}
      >
        <DehazeIcon />
      </div>
      <motion.div className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${open}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              onClick={() => setSelected(index)}
              key={index}
              className={selected === index ? "menuItem active" : "menuItem"}
            >
              <div>{<item.icon />}</div>

              <span>{item.heading}</span>
            </div>
          ))}
          <div className="menuItem ">
            <div>
              <LogoutOutlinedIcon />
            </div>

            <span>Log Out</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
