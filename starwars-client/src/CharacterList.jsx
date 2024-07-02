import React, { useEffect } from "react";
import './CharacterList.css'
import { Link } from "react-router-dom";

const CharacterList = (props) => {
    const goToCharacter = () => {
        console.log("clicked");
    
    }
    return(
        <div>
            <Link to='/api/characters/{props.data.id}'>{props.data.name}</Link>
        </div>
    );
}


export default CharacterList;