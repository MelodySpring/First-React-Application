import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <span>
        &copy; {new Date().getFullYear()} Red Dog Design
      </span>
    </footer>

  )
}
const styles = {
  footer: {
    height: '80px',
    backgroundColor: '#d5652b',
    fontSize: '40px',
    fontFamily: 'Figtree, sans-serif',
    color: '#008e',
    textAlign: 'center',
    padding: '10px',
  },

};

export default Footer