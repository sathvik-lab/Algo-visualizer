import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations } from './sortingAlgorithms/sortingAlgorithms.js';

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = '#0073e6'; // Amazon Prime blue
const SECONDARY_COLOR = 'red';

const Sorts = ({ current }) => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromInterval(5, 730));
        }
        setArray(newArray);
    };

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
            <div className="sorting-visualizer">
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                                transition: `background-color ${ANIMATION_SPEED_MS}ms`,
                            }}
                        ></div>
                    ))}
                </div>
                <div className="button-container">
                    <button onClick={() => resetArray()}>Generate New Array</button>
                    <button onClick={() => mergeSort()}>Merge Sort</button>
                    <button onClick={() => quickSort()}>Quick Sort</button>
                    <button onClick={() => heapSort()}>Heap Sort</button>
                    <button onClick={() => bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => testSortingAlgorithms()}>
                        Test Sorting Algorithms (BROKEN)
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sorts
