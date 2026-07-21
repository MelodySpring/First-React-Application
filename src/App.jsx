// App.jsx
import React, { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RandomRedPage from './pages/RandomRedPage';
import DogFactsPage from './pages/DogFactsPage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {page === 'home' && <HomePage />}
      {page === 'randomred' && <RandomRedPage />}
      {page === 'dogfacts' && <DogFactsPage />}
    </Layout>
  );
}

export default App;
