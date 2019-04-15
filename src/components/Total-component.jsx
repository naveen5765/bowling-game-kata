import React from 'react';
import PropTypes from 'prop-types';

const TotalComponent = function(props){
    
    const calculateScore = (scoreBoard) => {
        return scoreBoard.reduce((total, currentValue) => {
            return total + currentValue;
        })
    }

    return (
        <div className="total">
          <span>Total : </span>
          <span>{calculateScore(props.scoreBoard)}</span>
        </div>
    );
}

TotalComponent.propTypes = {
    scoreBoard: PropTypes.array
}

export default TotalComponent;