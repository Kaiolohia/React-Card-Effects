import React, { useState, useEffect, useRef } from "react";
import axios from "axios"

const DrawCard = ({ addCard }) => {

    const [deckID, setDeckID] = useState("")
    const [toDraw, setToDraw] = useState(false)
    const interval = useRef()

    useEffect(() => {
        const fetchDeckID = async () => {
            const res = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            setDeckID(res.data.deck_id)
        }
        fetchDeckID()
    }, [])

    const drawACard = async () => {
        const res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        addCard(res.data.cards[0])
        if (res.data.remaining === 0) {
            alert("No more cards left to draw!")
            window.location.reload();
        }
    }

    const handleClick = () => {
        if (!toDraw) {
            setToDraw(()=> true)
            interval.current = setInterval(()=> {
                drawACard()
            }, 1000)
        } else {
            setToDraw(()=> false)
            clearInterval(interval.current)
        }
    }

    return (
        <button onClick={handleClick}> {!toDraw ? "Start drawing cards" : "Click to stop drawing"} </button>
    )
}

export default DrawCard