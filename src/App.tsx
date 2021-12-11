import React from 'react';
import SearchBar from './components/SearchBar'
import List from './components/List'
import Layout from './layout/Layout';
import './App.css';

function App() {
  return (
    <>
      <Layout>
        <SearchBar />
        <List />
      </Layout>
    </>
  );
}

export default App;
