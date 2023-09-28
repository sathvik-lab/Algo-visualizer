import React from 'react';
import { Tooltip, Whisper } from 'rsuite';
import './Bar.css'

const tooltip = (v) => (
    <Tooltip>
        Height: <i>{v}</i>
    </Tooltip>
);
const ArrayBar = ({ value, barWidth, PRIMARY_COLOR, ANIMATION_SPEED_MS }) => {

    return (
        <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip(value)}>
            <div
                className="array-bar"
                style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                    width: `${barWidth}px`,
                    transition: `background-color ${ANIMATION_SPEED_MS}ms`,
                    border: `0.2px solid beige`,
                    cursor: `pointer`
                }}
            >

            </div >
        </Whisper>
    );
};

export default ArrayBar;
