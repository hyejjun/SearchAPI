import React from 'react';
import SearchBar from './components/SearchBar'
import List from './components/List'
import Wrap from './layout/Layout';
import './App.css';

function App() {
  return (
    <>
      <Wrap>
        <SearchBar />
        <List />
      </Wrap>
    </>
  );
}

export default App;
