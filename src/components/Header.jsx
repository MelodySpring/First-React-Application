import React from 'react';
import logo from '../assets/reddog.svg';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#d5652b',
        height: '140px',          // ← taller so text is not hidden
        width: '100%',
        fontFamily: 'Figtree, sans-serif',
        fontSize: '50px',
        fontWeight: '600',
        color: '#008e',           // ← your text colour
      }}
    >
      <img
        src={logo}
        alt="Red Dog Design Logo"
        style={{
          width: '150px',
          height: 'auto',
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',   // ← centers the logo vertically
        }}
      />

      Red Dog Design
    </div>
  );
};

export default Header;

