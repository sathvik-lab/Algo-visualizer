import React from 'react';
import Slider from 'rsuite/Slider';
import 'rsuite/dist/rsuite.min.css';

const SliderComponent = ({ numBars, setNumBars }) => {
    const style = { width: 1000 };

    const handleSliderChange = (value) => {
        setNumBars(value);
    };

    return (
        <>
            <div style={style}>
                <Slider
                    value={numBars}
                    min={10} // Adjust min and max as needed
                    step={20}
                    max={300}
                    graduated
                    progress
                    onChange={handleSliderChange}
                    renderMark={(mark) => {
                        return <span>{mark}</span>;
                    }}
                />
            </div>
        </>
    );
};

export default SliderComponent;
