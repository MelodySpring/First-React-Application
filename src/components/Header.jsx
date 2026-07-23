import React from 'react'
import logo from '../assets/reddog.svg';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '10px',
        backgroundColor: '#d5652b',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '28px',
        fontWeight: '600'
      }}
    >
      <img
        src={logo}
        alt="Red Dog Design Logo"
        style={{
          width: "80px",
          height: "auto",
          position: "absolute",
          left: "10px"
        }}
      />

      Red Dog Design
    </div>
  );
};

export default Header;
