import React from 'react'
import logo from '../assets/reddog.svg';

const Header = () => {
  return (
    <div>
      <img
        src={logo}
        alt="Red Dog Design Logo"
        style={{ width: "80px", height: "auto" }}
      />
      Red Dog Design
    </div>
  );
};

export default Header;