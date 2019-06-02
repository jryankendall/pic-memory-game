import React from 'react';
import Images from "./Images";

function Game(props) {
    return (
        <div className="col s12 image-box-container">
            <Images className="guessing-picture" />
        </div>
    )
}

export default Game;