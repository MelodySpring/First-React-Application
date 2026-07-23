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

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#d5652b',
    color: '#008e',
    textAlign: 'center',
    padding: '10px',
  },

};

export default Footer