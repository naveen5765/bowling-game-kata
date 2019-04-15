import React from 'react';
import PropTypes from 'prop-types';

const TotalComponent = function(props){

    const TOTAL_PINS_PER_FRAME = 10;
    
    const calculateScore = (scoreBoard) => {
        let total = 0;
        if(scoreBoard.length > 0){
            for(let frame=0, roll=0; frame<TOTAL_PINS_PER_FRAME; frame++, roll=roll+2){
                total += scoreBoard[roll] + scoreBoard[roll+1];
                if(isStrike(scoreBoard[roll])){
                    total += calculateStrikeBonus(frame, roll, scoreBoard);
                }else if(isSpare(scoreBoard[roll],scoreBoard[roll+1])){
                    total += calculateSpareBonus(roll, scoreBoard);
                }
            }
        } 
        return total;
    }

    const calculateStrikeBonus = (frame, roll, scoreBoard) => {
        let strikeBonus = 0;
        if(frame === 9){
            strikeBonus += scoreBoard[roll+2];
        }else{
            strikeBonus += scoreBoard[roll+2];
            if(isStrike(scoreBoard[roll+2])){
                strikeBonus += scoreBoard[roll+4];
            }else{
                strikeBonus += scoreBoard[roll+3];
            }
        }
        return strikeBonus;
    }

    const calculateSpareBonus = (roll, scoreBoard) => {
        return scoreBoard[roll+2];
    }

    const isSpare = (roll1, roll2) => {
        return roll1+roll2 === TOTAL_PINS_PER_FRAME;
    } 

    const isStrike = (roll1) => {
        return roll1 === TOTAL_PINS_PER_FRAME;
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