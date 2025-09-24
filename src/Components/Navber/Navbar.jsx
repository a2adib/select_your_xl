import React from 'react';
import navImg from "../../assets/logo.png"
import dollerImg from "../../assets/DoubleDollar.png"
const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <img src={navImg} alt="" />
        </div>
        <div className="flex gap-1">
          <span>{availableBalance}</span>
          <span> Coin</span>
          <img src={dollerImg} alt="" />
        </div>
      </div>
    );
};

export default Navbar;