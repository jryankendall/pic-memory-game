import React from 'react';
import placeholder from './img/150.png';

function Image(props) {
    return (
        <img src={placeholder} alt="F" class={props.className}></img>
    )
}

export default Image;