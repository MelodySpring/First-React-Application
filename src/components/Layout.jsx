// Layout.jsx
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'Random Red', key: 'randomred' },
  { name: 'Dog Facts', key: 'dogfacts' },
];

const Layout = ({ children, selectedPage, onSetPage }) => {
  const renderPageLinks = () => {
    return pages.map(page => (
      <li
        key={page.key}
        style={{
          ...styles.sidebarLink,
          ...(page.key === selectedPage ? styles.selected : {}),
        }}
        onClick={() => onSetPage(page.key)}
      >
        {page.name}
      </li>
    ));
  };

  return (
    <div style={styles.container}>
      <Header />   {/* ← this makes the coloured bar appear */}

      {/* Navigation (optional – remove if you don’t want a second bar) */}
      {/* <NavBar /> */}

      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <ul>{renderPageLinks()}</ul>
        </aside>

        <section style={styles.content}>
          {children}
        </section>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#c47949',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#e29d6f',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  sidebarLink: {
    display: 'block',
    padding: '5px',
    fontFamily: 'Roboto, sans-serif',
    color: '#008e',
    textDecoration: 'none',
  },
};

export default Layout;
