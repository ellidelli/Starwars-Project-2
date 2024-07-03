import React, { useEffect } from "react";
import './CharacterList.css'
import { Link } from "react-router-dom";

const CharacterList = (props) => {
    return(
        <div className = "character">
            <Link to={`/character/${props.data.id}`}>{props.data.name}</Link>
        </div>
    );
}


export default CharacterList;