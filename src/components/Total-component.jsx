import React from 'react';
import PropTypes from 'prop-types';

const TotalComponent = function(props){
    
    const calculateScore = (scoreBoard) => {
        let total = 0;
        for(let frame=0, roll=0; frame<10; frame++, roll=roll+2){
            total += scoreBoard[roll];
            total += scoreBoard[roll+1];
            if(isSpare(scoreBoard[roll],scoreBoard[roll+1])){
                total += scoreBoard[roll+2];
            }
        }
        return total;
    }

    const isSpare = (roll1, roll2) => {
        return (roll1+roll2 === 10);
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