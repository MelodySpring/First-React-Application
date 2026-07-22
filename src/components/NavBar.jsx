import logo from '../assets/reddog.svg';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <img src={logo} alt="Red Dog Design Logo" style={styles.logo} />
      <h1>Red Dog Design</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 20px",
    backgroundColor: "#f5f5f5"
  },
  logo: {
    height: "150px",
    width: "150px"
  }
};

export default NavBar