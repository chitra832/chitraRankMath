import React from "react";
import Card from "./Card";
import "./TwoCards.css";

const TwoCards = () => {
  return (
    <>
      <div className="twoCards">
        <Card title="Buy BTC" color="#1A96F7" />
        <Card title="Sell BTC" color="#FC498F" />
      </div>
    </>
  );
};

export default TwoCards;
