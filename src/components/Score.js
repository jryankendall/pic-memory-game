import React, { Component } from 'react';

class Score extends Component {

    state = {
        streak: 0,
        record: 0
    }

    render() {
        return (
            <div className="scoreboard">
                <p><span className="scorelabel">Current Streak:</span> {this.state.streak}</p>
                <p><span className="scorelabel">High Score:</span> {this.state.record}</p>
            </div>
        )
    };
}

  
export default Score;