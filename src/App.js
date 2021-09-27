import './App.css';
import Header from './components/header-bar'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './components/character-card';
import Search from './components/search';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [query, setQuery] = useState('')


  useEffect(()=> {
    const fetchItems = async ()=>{
      const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])

  return (
    <div>
    <div className="grid place-content-center">
      <div className="container text-red-500">
        Hello World j650n
        </div>
        <div  className="rounded-full h-40 w-40 flex items-center justify-center content-center justify-self-center">
        <Header/>
        </div>
        <br/>
        <div  className="flex items-center justify-center">
        <Search getQuery={(q) => setQuery(q)}/></div>
        <br/>
        </div>
        <CharacterCard isLoading={isLoading} items={items}/>
        </div>
  );
}

export default App;
