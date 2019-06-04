import React from 'react';

function Image(props) {
    return (
        <img src={`./img/${props.path}`} alt="F" className={props.className} value={props.value}  onClick={props.onClick}></img>
    )
}

export default Image;