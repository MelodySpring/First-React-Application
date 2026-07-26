import React from 'react';
import logo from '../assets/reddog.svg';
import '../Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Red Dog Design Logo" className="header-logo" />
      Red Dog Design
    </header>
  );
};

export default Header;


