import React from 'react';
import PropTypes from 'prop-types';

const FrameComponent = function(props){
    return (
        <div className="frame">
            <p> frame 1</p>
            <div className="pins">
                <span>{props.roll1 === 10 ? 'X' : props.roll1}</span>
                <span>{props.roll1 === 10 ? '' : props.roll2}</span>
            </div>
        </div>
    );
}

FrameComponent.propTypes = {
    roll1: PropTypes.number,
    roll2: PropTypes.number
}

export default FrameComponent;