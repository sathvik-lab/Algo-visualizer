import React, { useState, useEffect, useRef } from 'react';
import { getMergeSortAnimations } from './sortingAlgorithms/sortingAlgorithms.js';
import SliderComponent from './slider.js';
import './Sorting.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ArrayBar from './Bar.js';

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = '#0073e6'; // Amazon Prime blue
const SECONDARY_COLOR = 'red';

const Sorts = ({ current }) => {
    const [array, setArray] = useState([]);
    const [numBars, setNumBars] = useState(100); // Initial number of array bars
    const [barWidth, setBarWidth] = useState(1); // Initial width of array bars
    const arrayContainerRef = useRef(null);


    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < numBars; i++) {
            newArray.push(randomIntFromInterval(5, 700));
        }
        setArray(newArray);
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
    }, [numBars]); // Reset the array and update bar width whenever numBars changes

    const mergeSort = () => {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    };

    const quickSort = () => {
        // Implement quickSort logic here
    };

    const heapSort = () => {
        // Implement heapSort logic here
    };

    const bubbleSort = () => {
        // Implement bubbleSort logic here
    };

    const testSortingAlgorithms = () => {
        for (let i = 0; i < 100; i++) {
            const newArray = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                newArray.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = newArray.slice().sort((a, b) => a - b);
            const mergeSortedArray = getMergeSortAnimations(newArray.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    };

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function arraysAreEqual(arrayOne, arrayTwo) {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) {
                return false;
            }
        }
        return true;
    }

    return (
        <>

            <Container fluid className="full-height">
                <Card className="full-height">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
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
                                    ANIMATION_SPEED_MS={ANIMATION_SPEED_MS}
                                />
                            ))}
                        </div>

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-primary button" onClick={() => resetArray()}>Generate New Array</Button>
                        <Button variant="outline-success button" onClick={() => mergeSort()}>Merge Sort</Button>
                    </Card.Footer>
                </Card>
            </Container >

        </>
    )
}

export default Sorts
