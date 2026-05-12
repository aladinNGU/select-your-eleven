import React from "react";
import navLogo from "../../assets/cricket-logo.png";
import dollarSign from "../../assets/dollar-sign.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <img src={navLogo} width="50px" alt="logo" />
      </div>
      <div className="flex gap-2">
        <span>{availableBalance.toFixed(2)}</span>
        <span>Millions</span>
        <img src={dollarSign} width="25px" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
