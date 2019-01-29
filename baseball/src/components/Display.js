import React from 'react';

import Dashboard from './Dashboard';

class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
        outs: 0,
        inning: 1,
        inningType: 'top',
    }

    wasStrike = () => {
        if (this.state.strikes < 2) {
            this.setState({ strikes: this.state.strikes + 1 });
        } else {
            if (this.state.outs === 2) {
                if (this.state.inningType === 'top') {
                    this.setState({ 
                        balls: 0, 
                        strikes: 0, 
                        outs: 0, 
                        inningType: 'bottom' 
                    });
                } else {
                    this.setState({ 
                        balls: 0, 
                        strikes: 0, 
                        outs: 0, 
                        inning: this.state.inning + 1, 
                        inningType: 'top' 
                    });
                }
            } else {
                this.setState({ balls: 0, strikes: 0, outs: this.state.outs + 1 });
            }
        }
    }

    wasBall = () => {
        if (this.state.balls < 3) {
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
                    <div className='out-container'>
                        <p>Outs:</p>
                        <p data-testid='out-count'>
                            {this.state.outs}
                        </p>
                    </div>
                    <div className='inning-container'>
                        <p>Inning:</p>
                        <p data-testid='inning-count'>
                            {`${this.state.inningType} of the ${this.state.inning}`}
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