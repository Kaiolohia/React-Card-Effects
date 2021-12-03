//contains all of the cards and button
import React, { useState } from "react";
import Card from "./Card";
import DrawCard from "./DrawCard";

const CardList = () => {
    const [cards, setCards] = useState([])



    const addCard = card => {
        setCards(c => ([...c, card]))
    }

    return (
        <>
        <DrawCard addCard={addCard}/>
        <div className="pile">
            {cards.map(c => <Card image={c.image} code={c.code} key={c.code}/>)}
        </div>
        </>
    )
}

export default CardList