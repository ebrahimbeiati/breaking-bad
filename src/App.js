import { useState } from 'react';
import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Header from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
    
      <Header />
      <Searchbar setSearch={(search)=>setSearch(search)} />
      <CharacterList />
   
    </div>
  );
}

export default App;
