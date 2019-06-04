import React, { Component } from 'react';
import Images from "./Images";

class Game extends Component {

    render() {
        return (
            <div className="col s12 image-box-container">
                <Images className="guessing-picture" />
            </div>
        )
    }
}

export default Game;