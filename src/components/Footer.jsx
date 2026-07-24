import React from 'react'
import logo from '../assets/reddog.svg';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <img src={logo} alt="logo" style={styles.logo} />
      &copy; {new Date().getFullYear()} Red Dog Design
    </footer>

  )
}
const styles = {
  footer: {
    height: '80px',
    backgroundColor: '#d5652b',
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: 'Figtree, sans-serif',
    color: '#051191',
    textAlign: 'center',
    padding: '10px',
    display: 'flex',            // put logo + text in a row
    justifyContent: 'center',   // centre the whole row
    alignItems: 'center',       // align vertically
    gap: '15px',
  },
  logo: {
    width: '80px',
    height: '80px',
  }
};

export default Footer