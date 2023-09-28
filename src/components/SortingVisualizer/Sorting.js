import React, { useState, useEffect, useRef } from 'react';
import SliderComponent from './slider.js';
import './Sorting.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ArrayBar from './Bar.js';
import { mergeSort, quickSort, insertionSort, selectionSort, bubbleSort } from './AnimateSorting.js';

const max_speed = 10;
const min_speed = 0.1;
const max_bars = 300;
const PRIMARY_COLOR = '#0073e6'; // Amazon Prime blue
const SECONDARY_COLOR = 'red';


const Sorts = ({ current }) => {
    const [array, setArray] = useState([]);
    const [numBars, setNumBars] = useState(100); // Initial number of array bars
    const [barWidth, setBarWidth] = useState(1); // Initial width of array bars
    const [speed, setSpeed] = useState(max_speed);
    const arrayContainerRef = useRef(null);


    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < numBars; i++) {
            newArray.push(randomIntFromInterval(5, 700));
        }
        setArray(newArray);
    };

    const animationSpeed = () => {
        // Calculate speed based on the number of array elements
        const baseSpeed = (max_bars - numBars) * (max_speed - min_speed) / (max_bars - 1) + min_speed;

        // Ensure that the speed is within the defined limits
        const finalSpeed = Math.min(max_speed, Math.max(min_speed, baseSpeed));

        setSpeed(finalSpeed);
    };

    const updateBarWidth = () => {
        if (arrayContainerRef.current) {
            const containerWidth = arrayContainerRef.current.offsetWidth;
            const newWidth = Math.min(containerWidth / numBars, 100);
            setBarWidth(newWidth);
        }
    };
    useEffect(() => {
        resetArray();
        updateBarWidth();
        animationSpeed();
    }, [numBars]); // Reset the array and update bar width whenever numBars changes

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    return (
        <>

            <Container fluid className="full-height">
                <Card className="full-height">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px' }} >
                        <SliderComponent numBars={numBars} setNumBars={setNumBars} />
                    </div>
                    <Card.Body>
                        <div className="array-container" ref={arrayContainerRef}>
                            {array.map((value, idx) => (
                                <ArrayBar
                                    key={idx}
                                    value={value}
                                    barWidth={barWidth}
                                    PRIMARY_COLOR={PRIMARY_COLOR}
                                    speed={speed}
                                />
                            ))}
                        </div>

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-primary button" onClick={() => resetArray()}>Generate New Array</Button>
                        {current === '/sort/' && <Button variant="outline-success button" onClick={() => mergeSort({ array, speed })}>Merge Sort</Button>}
                        {current === '/sort/quick' && <Button variant="outline-success button" onClick={() => quickSort({ array, speed })}>Quick Sort</Button>}
                        {current === '/sort/select' && <Button variant="outline-success button" onClick={() => selectionSort({ array, speed })}>Selection Sort</Button>}
                        {current === '/sort/insert' && <Button variant="outline-success button" onClick={() => insertionSort({ array, speed })}>Insertion Sort</Button>}
                        {current === '/sort/bubble' && <Button variant="outline-success button" onClick={() => bubbleSort({ array, speed })}>Bubble Sort</Button>}
                    </Card.Footer>
                </Card>
            </Container >

        </>
    )
}

export default Sorts
