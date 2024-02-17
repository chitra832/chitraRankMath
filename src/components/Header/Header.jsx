import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { IoIosArrowBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log("okkkk");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (menuRef.current && !menuRef.current.contains(event.target)) {
  //         closeMenu();
  //       }
  //     };

  //     if (isMenuOpen) {
  //       document.addEventListener("click", handleClickOutside);
  //     }

  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, [isMenuOpen]);

  return (
    <>
      <header className="header-box">
        <div className="toggleBtn icon" onClick={closeMenu}>
          <IoIosArrowBack className="icon" />
        </div>
        <div className="headerTitle heading roboto-medium">Bitcoin Wallet</div>
        <div className="menuBtn" onClick={toggleMenu}>
          <CiMenuKebab className="icon" />
        </div>
        {isMenuOpen && (
          <div className="smallMenu">
            <div className="menutab">
              <p>Profile</p>
              <FaUserEdit />
            </div>
            <div className="divider"></div>
            <div className="menutab">
              <p>Cart</p>
              <IoIosCart />
            </div>
            <div className="divider"></div>
            <div className="menutab">
              <p>Share</p>
              <IoMdShareAlt />
            </div>
            <div className="divider"></div>
            <div className="menutab">
              <p>Settings</p>
              <IoIosSettings />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
