import React, { useState } from "react";
import "./Swipable.css";
import { SiBitcoinsv } from "react-icons/si";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SwipableCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`swipeCard ${isExpanded ? "expanded" : ""}`}>
      <div className="bitIcon">
        <div>
          <SiBitcoinsv className="icon" color="#FEB534" />
          <h5>Bitcoin</h5>
        </div>
        <h4 className="muted">BTC</h4>
      </div>
      <h2>3.529020 BTC</h2>
      <div className="bitIcon">
        <h4 className="muted">$19.153 USD</h4>
        <div className="badge">
          <p className="">-2.32%</p>
        </div>
      </div>
      <div className="swipeArrow" onClick={handleArrowClick}>
        {isExpanded ? <IoIosArrowUp className="icon" /> : <IoIosArrowDown className="icon" />}
      </div>
      {isExpanded && (
        <div className="expandedContent">
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
    </div>
  );
};

export default SwipableCard;
