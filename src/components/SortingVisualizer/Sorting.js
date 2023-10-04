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


const Sorts = () => {
    const [array, setArray] = useState([]);
    const [numBars, setNumBars] = useState(100); // Initial number of array bars
    const [barWidth, setBarWidth] = useState(1); // Initial width of array bars
    const [speed, setSpeed] = useState(max_speed);
    const arrayContainerRef = useRef(null);
    const arrayBarsRef = useRef([]);


    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < numBars; i++) {
            newArray.push(randomIntFromInterval(5, 700));
        }
        setArray(newArray);
    };

    const calculateAnimationSpeed = () => {
        // Calculate base delay
        const baseDelay = 100; // Minimum delay in milliseconds
        const delayFactor = 1 + (200 - numBars) / 100; // Increase delay for smaller arrays

        // Calculate final delay
        const finalDelay = baseDelay * delayFactor;

        return finalDelay / 20;
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
        setSpeed(calculateAnimationSpeed());
    }, [numBars]);

    // useEffect(() => {
    // }, [numBars, arrayBarsRef.current]);

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleMergeSort = () => {
        // console.log("Array before mergeSort:", array);
        mergeSort({ array, speed });
    };

    const handleQuickSort = () => {
        quickSort({ array, speed });
    };

    const handleSelectionSort = () => {
        selectionSort({ array, speed });
    };

    const handleInsertionSort = () => {
        insertionSort({ array, speed });
    };

    const handleBubbleSort = () => {
        bubbleSort({ array, speed });
    };


    return (
        <>

            <Container fluid className="full-height">
                <Card className="full-height">
                    <Card.Body>
                        <div className="array-container" ref={arrayContainerRef}>
                            {array.map((value, idx) => (
                                <ArrayBar
                                    key={idx}
                                    value={value}
                                    barWidth={barWidth}
                                    PRIMARY_COLOR={PRIMARY_COLOR}
                                    speed={speed}
                                    className='array-bar' // This sets the class name of each ArrayBar component
                                />
                            ))}
                        </div>

                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: '#3322', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <SliderComponent numBars={numBars} setNumBars={setNumBars} />

                        <div>
                            <Button variant="outline-primary button-sm me-2" onClick={() => resetArray()}>Generate New Array</Button>
                            <Button variant="outline-success button-sm me-2" onClick={handleMergeSort}>Merge Sort</Button>
                            <Button variant="outline-danger button-sm me-2" onClick={handleQuickSort}>Quick Sort</Button>
                            <Button variant="outline-dark button-sm me-2" onClick={handleSelectionSort}>Selection Sort</Button>
                            <Button variant="outline-info button-sm me-2" onClick={handleInsertionSort}>Insertion Sort</Button>
                            <Button variant="outline-secondary button-sm me-2" onClick={handleBubbleSort}>Bubble Sort</Button>
                        </div>
                    </Card.Footer>

                </Card>
            </Container >

        </>
    )
}

export default Sorts
