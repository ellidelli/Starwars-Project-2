import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SWAPI_API_URL);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error('Error fetching socks:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={data.map((character) => (
            <CharacterList key={character.id} data={character} />
          ))}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
