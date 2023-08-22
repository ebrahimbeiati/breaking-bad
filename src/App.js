import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Header from './components/Navbar';
import Searchbar from './components/Searchbar';
import axios from './components/api';

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);


useEffect(()=>{
  const fetchItems = async () => {
    setLoading(true);
    const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`);
    setItems(result.data);
    setLoading(false);
    };
  
  fetchItems();
},[search])

  return (
    <div className="App">
    
      <Header />
      <Searchbar setSearch={(search)=>setSearch(search)} />
      <CharacterList items={items}/>
   
    </div>
  );
}

export default App;
