import React from 'react';
import { Tooltip, Whisper } from 'rsuite';
import './Bar.css'

const tooltip = (v) => (
    <Tooltip>
        Height: <i>{v}</i>
    </Tooltip>
);
const ArrayBar = ({ value, barWidth, PRIMARY_COLOR, speed }) => {

    return (
        <Whisper
            placement="top"
            trigger="hover"
            speaker={tooltip(value)}
            container={() => document.body} // Define a container for the tooltip
        >
            <div
                className="array-bar"
                style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                    width: `${barWidth}px`,
                    transition: `background-color ${speed}ms`,
                    border: `0.2px solid beige`,
                    cursor: `pointer`
                }}
            >

            </div >
        </Whisper>
    );
};

export default ArrayBar;
