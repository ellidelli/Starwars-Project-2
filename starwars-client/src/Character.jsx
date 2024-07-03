import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Character = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
        setLoading(true)
          const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters/${id}`);
          if (!response.ok) {
            throw new Error('Data could not be fetched!');
          }
          const json_response = await response.json();
          console.log(json_response);
          setData(json_response);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching character:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <>
        {loading ?(
            <h1>loading...</h1>
        ):(<h1>{data[0].name}</h1>)}
        </>

    )
}

export default Character;