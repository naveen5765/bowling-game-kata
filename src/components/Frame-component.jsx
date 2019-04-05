import React from 'react';
import PropTypes from 'prop-types';

const FrameComponent = function(props){
    const isStrike = (roll1) => {
        return roll1 === 10
    }

    return (
        <div className="frame">
            <p> frame 1</p>
            <div className="pins">
                <span>{isStrike(props.roll1) ? 'X' : props.roll1}</span>
                <span>{isStrike(props.roll1) ? '' : props.roll2}</span>
            </div>
        </div>
    );
}

FrameComponent.propTypes = {
    roll1: PropTypes.number,
    roll2: PropTypes.number
}

export default FrameComponent;