import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Character.css';

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
            <div className="button-container">
                <div className="character">
                    {loading ? (
                        <h1>loading...</h1>
                    ) : (
                        data && data.length > 0 && (
                            <>
                                <h1>{data[0].name}</h1>
                                <div className="character-details">
                                    <h3 className="button">Height: {data[0].height} cm</h3>
                                    <h3 className="button">Mass: {data[0].mass} kg</h3>
                                    <h3 className="button">Born: {data[0].birth_year}</h3>
                                </div>
                                <h2>Homeworld</h2>
                                <h2>Films Appeared in</h2>
                            </>
                        )
                    )}
                </div>
            </div>
        </>
    );
    
    
    
}

export default Character;