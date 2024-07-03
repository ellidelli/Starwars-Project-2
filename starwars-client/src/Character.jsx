import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const Character = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [film, setFilm] = useState([]);
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/planets/${id}/characters`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                console.log(json_response);
                setInfo(json_response);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters/${id}/films`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                console.log(json_response);
                setFilm(json_response);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <>
            {loading ? (
                <h1>loading...</h1>
            ) : (<>
                <h1>{data[0].name}</h1>
                    <h3>Height: {data[0].height} cm</h3>
                    <h3>Mass: {data[0].mass} kg</h3>
                    <h3>Born: {data[0].birth_year}</h3>
                <h2>Homeworld</h2>

                <h2>Films Appeared in</h2>

                
            </>)}
        </>

    )
}

export default Character;