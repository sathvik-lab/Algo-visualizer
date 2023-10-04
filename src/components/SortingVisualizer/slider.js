import React from 'react';
import Slider from 'rsuite/Slider';
import 'rsuite/dist/rsuite.min.css';

const SliderComponent = ({ numBars, setNumBars }) => {
    const minNumBars = 10;
    const maxNumBars = 300;
    // const backgroundColor = numBars < maxNumBars / 2 ? 'black' : 'transparent'; // Set background to black if numBars is less than half of the maximum

    const style = {
        width: 300,
        backgroundColor: 'black', // Set the background color dynamically
    };

    const handleSliderChange = (value) => {
        setNumBars(value);
    };

    return (
        <>
            <div style={style}>
                <Slider
                    value={numBars}
                    min={minNumBars}
                    max={maxNumBars}
                    graduated
                    progress
                    onChange={handleSliderChange}
                />
            </div>
        </>
    );
};

export default SliderComponent;
