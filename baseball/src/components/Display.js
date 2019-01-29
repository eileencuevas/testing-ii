import React from 'react';

import Dashboard from './Dashboard';

class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
    }

    render() {
        return(
            <>
                <div className='display-container'>
                    <div className='ball-container'>
                        <p>Balls:</p>
                        <p>{this.state.balls}</p>
                    </div>
                    <div className='strike-container'>
                        <p>Strikes:</p>
                        <p>{this.state.strikes}</p>
                    </div>
                </div>
                <Dashboard />
            </>
        );
    }
}

export default Display;