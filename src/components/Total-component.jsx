import React from 'react';
import PropTypes from 'prop-types';

const TotalComponent = function(props){
    
    const calculateScore = (scoreBoard) => {
        let total = 0;
        for(let frame=0, roll=0; frame<10; frame++, roll=roll+2){
            total += scoreBoard[roll] + scoreBoard[roll+1];
            if(isStrike(scoreBoard[roll])){
                total += calculareStrikeBonus(frame, roll, scoreBoard);
            }else if(isSpare(scoreBoard[roll],scoreBoard[roll+1])){
                total += calculareSpareBonus(roll, scoreBoard);
            }
        }
        return total;
    }

    const calculareStrikeBonus = (frame, roll, scoreBoard) => {
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

    const calculareSpareBonus = (roll, scoreBoard) => {
        return scoreBoard[roll+2];
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