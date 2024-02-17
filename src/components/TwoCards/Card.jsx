import React from "react";
import { SiBitcoinsv } from "react-icons/si";

const Card = ({ title, color }) => {
  return (
    <div className="card">
      <SiBitcoinsv className="icon" color={color} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
