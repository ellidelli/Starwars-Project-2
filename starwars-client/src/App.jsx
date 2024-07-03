import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Character from './Character';
import Planet from './Planet';
import Film from './Film';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters`);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data}/>}>
          </Route>
          <Route path='character/:id' element={<Character/>}>
          </Route>
          <Route path ='planet/:id' element={<Planet/>}>
          <Route path ='films/:id'element={<Film/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
