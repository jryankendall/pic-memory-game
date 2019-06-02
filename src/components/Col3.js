import React, {Component} from 'react';
import Image from './img/150.png';

class Col3 extends Component {
    render() {
        const props = this.props;
        return <div className="col s3 picture-box-col" id={props.id} row={props.row} column={props.column}><img className="guessing-picture" src={Image} alt="F"/></div>
    }
}

export default Col3;