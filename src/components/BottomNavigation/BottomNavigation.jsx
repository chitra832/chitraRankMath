import React, { useState } from "react";
import "./BottomNavigation.css";
import { FaWallet } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const BottomNavigation = () => {
  const [activeIcon, setActiveIcon] = useState("wallet");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };
  return (
    <>
      <div className="bottomNav">
        <FaWallet
          className={`icon ${activeIcon === "wallet" ? "active" : "inactive"}`}
          onClick={() => handleIconClick("wallet")}
        />
        <FaCompass
          className={`icon ${activeIcon === "compass" ? "active" : "inactive"}`}
          onClick={() => handleIconClick("compass")}
        />
        <IoIosNotifications
          className={`icon ${
            activeIcon === "notifications" ? "active" : "inactive"
          }`}
          onClick={() => handleIconClick("notifications")}
        />
        <IoMdSettings
          className={`icon ${
            activeIcon === "settings" ? "active" : "inactive"
          }`}
          onClick={() => handleIconClick("settings")}
        />
      </div>
    </>
  );
};

export default BottomNavigation;
