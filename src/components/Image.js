import React from 'react';

function Image(props) {
    return (
        <img src={`./img/${props.path}`} alt="F" className={props.className}></img>
    )
}

export default Image;