import React from 'react'
import logo from '../assets/reddog.svg';
import '../Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      &copy; {new Date().getFullYear()} Red Dog Design
    </footer>
  );
};

export default Footer;
