import React from 'react';
import PropTypes from 'prop-types';

const FrameComponent = function(props){
    const isStrike = (roll1) => {
        return roll1 === 10
    }

    const isSpare = (frame) => {
        return frame.roll1 + frame.roll2 === 10
    }
    
    const getRoll2Value = (frame) => {
        let value;
        if(frame.index !== 10){
            if(isStrike(frame.roll1)){
                value = ''
            }else if(isSpare(frame)){
                value = '/'
            }else{
                value = frame.roll2
            } 
        }else{
            if(isStrike(frame.roll1) && isStrike(frame.roll2)){
                value = 'X'
            }else if(isSpare(frame) && !isStrike(frame.roll1)){
                value = '/'
            }else{
                value = frame.roll2
            } 
        }
        return value;
    }

    const getRoll3Value = (frame) => {
        let value;
        if((isStrike(frame.roll1) || isSpare(frame)) && frame.index === 10){
            let frameValue = frame.roll3;
            if(isStrike(frame.roll1) && isStrike(frame.roll2) && isStrike(frame.roll3)){
                frameValue = 'X'
            }
            value = <span>{frameValue}</span>
        }
        return value;
    }

    return (
        <div className="frame">
            <p> frame 1</p>
            <div className="pins">
                <span>{isStrike(props.roll1) ? 'X' : props.roll1}</span>
                <span>{getRoll2Value(props)}</span>
                {getRoll3Value(props)}
            </div>
        </div>
    );
}

FrameComponent.propTypes = {
    roll1: PropTypes.number,
    roll2: PropTypes.number
}

export default FrameComponent;