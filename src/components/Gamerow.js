import React from 'react';
import Col3 from './Col3';

function Gamerow(props) {
    return (
        <div className='row' id={`row-${props.row}`}>
            <Col3 row={props.row} id={`row-${props.row}-col-1`} column={1}></Col3>
            <Col3 row={props.row} id={`row-${props.row}-col-2`} column={2}></Col3>
            <Col3 row={props.row} id={`row-${props.row}-col-3`} column={3}></Col3>
            <Col3 row={props.row} id={`row-${props.row}-col-4`} column={4}></Col3>
        </div>
    )
}

export default Gamerow;