import React from "react";
import * as cardStyles from "./card.module.scss"

const Card = () => {
    console.log("o card lá",cardStyles)
return (
    <div className={cardStyles.card}>
        <h1>Card</h1>
        <h1 className="">Card 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Click me</button>
    </div>
    );
}

export default Card;