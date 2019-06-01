import React from 'react';
import Col3 from './Col3';

function Gamerow(props) {
    return (
        <div className='row' id={`row-${props.row}`}>
            <Col3 row={props.row} id={`row-${props.row}-col-1`}>{props.children}</Col3>
            <Col3 row={props.row} id={`row-${props.row}-col-2`}>{props.children}</Col3>
            <Col3 row={props.row} id={`row-${props.row}-col-3`}>{props.children}</Col3>
            <Col3 row={props.row} id={`row-${props.row}-col-4`}>{props.children}</Col3>
        </div>
    )
}

export default Gamerow;