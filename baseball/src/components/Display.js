import React from 'react';

import Dashboard from './Dashboard';

class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
    }

    wasStrike = () => {
        if (this.state.strikes <= 2) {
            this.setState({ strikes: this.state.strikes + 1 });
        } else {
            this.setState({ balls: 0, strikes: 0 });
        }
    }

    wasBall = () => {
        if (this.state.balls <= 3) {
            this.setState({ balls: this.state.balls + 1 });
        } else {
            this.setState({ balls: 0, strikes: 0 });
        }
    }

    wasFoul = () => {
        if (this.state.strikes < 2) {
            this.setState({ strikes: this.state.strikes + 1 });
        }
    }

    wasHit = () => {
        this.setState({ balls: 0, strikes: 0 });
    }

    render() {
        return(
            <>
                <div className='display-container'>
                    <div className='ball-container'>
                        <p>Balls:</p>
                        <p data-testid='ball-count'>
                            {this.state.balls}
                        </p>
                    </div>
                    <div className='strike-container'>
                        <p>Strikes:</p>
                        <p data-testid='strike-count'>
                            {this.state.strikes}
                        </p>
                    </div>
                </div>
                <Dashboard 
                    wasStrike={this.wasStrike}
                    wasBall={this.wasBall}
                    wasFoul={this.wasFoul}
                    wasHit={this.wasHit}
                />
            </>
        );
    }
}

export default Display;