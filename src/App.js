import { useState, useEffect } from "react";
import Header from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CharacterList from "./components/CharacterList";
import axios from "./components/api";
function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(`/characters?name=${search}`);
      setItems(results.data);
      setLoading(false);
      console.log({ results });
    };
    fetchItems();
  }, [search]);
  return (
    <div className="app">
      <Header />
      <Searchbar setQuery={(search) => setSearch(search)} />
      <CharacterList items={items} />
      {/* {loading ? null : <h1>No Results</h1>} */}
      


    </div>
  );
}

export default App;
