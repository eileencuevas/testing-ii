import React from 'react';

const Dashboard = props => {
    return(
        <div className='dashboard-container'>
            <button 
                onClick={props.wasStrike}
                data-testid='strike-btn'
            >
                Strike
            </button>
            <button 
                onClick={props.wasBall}
                data-testid='ball-btn'
            >
                Ball
            </button>
            <button 
                onClick={props.wasFoul}
                data-testid='foul-btn'
            >
                Foul
            </button>
            <button 
                onClick={props.wasHit}
                data-testid='hit-btn'
            >
                Hit
            </button>
        </div>
    );
}

export default Dashboard;