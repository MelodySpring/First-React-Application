// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RandomRedPage from './pages/RandomRedPage';
import DogFactPage from './pages/DogFactsPage';

function App() {

  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'randomred' && <RandomRedPage />}
      {page === 'dogfacts' && <DogFactPage />}

    </Layout>
  );
}

export default App;
