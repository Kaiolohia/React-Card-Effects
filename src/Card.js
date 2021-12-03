import React from "react";
import "./card.css"

const Card = ({ code, image }) => {

    return(
        <div className="card">
            <img src={image} alt={code} />
        </div>
    )
}

export default Card