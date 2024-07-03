import React from "react";
import CharacterList from "./CharacterList";
import './CharacterList.css';

const Home = (props) => {

    return (
        <>
            <div className= "button-container">
                {props.data.map((character) => (
                    <CharacterList key={character.id} data={character} />
                ))}
            </div>
        </>
    )
}

export default Home;