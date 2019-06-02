import React, {Component} from 'react';
import Container from './Container';
import Row from './Row';
import Col12 from './Col12';
import Game from './Game';

class Grid extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col12 />
                </Row>
                <Row>
                    <Col12>
                        <Game/>
                    </Col12>
                </Row>
            </Container>
        )
    }
}

export default Grid;