import React from 'react';
import PropTypes from 'prop-types';

const TotalComponent = function(props){
    
    const calculateScore = (scoreBoard) => {
        let total = 0;
        for(let frame=0, roll=0; frame<10; frame++, roll=roll+2){
            total += scoreBoard[roll];
            total += scoreBoard[roll+1];
            if(isStrike(scoreBoard[roll])){
                if(frame === 9){
                    total += scoreBoard[roll+2];
                }else{
                    total += scoreBoard[roll+2];
                    if(isStrike(scoreBoard[roll+2])){
                        total += scoreBoard[roll+4];
                    }else{
                        total += scoreBoard[roll+3];
                    }
                }
            }else if(isSpare(scoreBoard[roll],scoreBoard[roll+1])){
                total += scoreBoard[roll+2];
            }
        }
        return total;
    }

    const isSpare = (roll1, roll2) => {
        return roll1+roll2 === 10;
    } 

    const isStrike = (roll1) => {
        return roll1 === 10;
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