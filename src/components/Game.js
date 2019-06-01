import React from 'react';
import Gamerow from './Gamerow';

function Game(props) {
    return (
        <>
            <Gamerow row="1">
                {props.children}
            </Gamerow>
            <Gamerow row="2">
                {props.children}
            </Gamerow>
            <Gamerow row="3">
                {props.children}
            </Gamerow>
            <Gamerow row="4">
                {props.children}
            </Gamerow>
        </>
    )
}

export default Game;