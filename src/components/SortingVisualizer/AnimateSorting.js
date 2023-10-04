import {
    getMergeSortAnimations,
    getQuickSortAnimations,
    getBubbleSortAnimations,
    getSelectionSortAnimations,
    getInsertionSortAnimations
} from './sortingAlgorithms/sortingAlgorithms.js';


const PRIMARY_COLOR = '#0073e6'; // Amazon Prime blue
const SECONDARY_COLOR = 'red';

// MergeSort


export const mergeSort = ({ array, speed }) => {
    const animations = getMergeSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * speed);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * speed);
        }
    }
};


export const quickSort = ({ array, speed }) => {
    const animations = getQuickSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');
    const animationDuration = 0.1; // Set your animation duration here
    console.log(animations.length);
    const n = animations.length;

    for (let i = 0; i < n; i++) {
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];

        setTimeout(() => {
            if (isSwap) {
                const b1 = arrayBars[barOneIdx].style.height;
                const b2 = arrayBars[barTwoIdx].style.height;
                arrayBars[barOneIdx].style.height = `${b2}px`;
                arrayBars[barTwoIdx].style.height = `${b1}px`;
            } else {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = barOneStyle.backgroundColor === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR;
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }
        }, i * animationDuration);

        // Group sequential swaps to reduce DOM updates
        while (i + 1 < n && animations[i + 1][2]) {
            const [nextBarOneIdx, nextBarTwoIdx] = animations[i + 1];
            const b1 = arrayBars[nextBarOneIdx].style.height;
            const b2 = arrayBars[nextBarTwoIdx].style.height;
            arrayBars[nextBarOneIdx].style.height = `${b2}px`;
            arrayBars[nextBarTwoIdx].style.height = `${b1}px`;
            i++;
        }
    }
};


export const bubbleSort = ({ array, speed }) => {
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        setTimeout(() => {
            if (isSwap) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
                // Change color after swapping
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            } else {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // Change color during comparison
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
                // Change color back to normal after comparison
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, speed);
            }
        }, i * speed);
    }
};

export const selectionSort = ({ array, speed }) => {
    const animations = getSelectionSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        setTimeout(() => {
            if (isSwap) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
            } else {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
                // Reset color after comparison
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, speed);
            }
        }, i * speed);
    }
};



export const insertionSort = ({ array, speed }) => {
    const animations = getInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        setTimeout(() => {
            if (isSwap) {
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
            } else {
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
                // Reset color after comparison
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, speed);
            }
        }, i * speed);
    }
};

// testing sorts

export const testSortingAlgorithms = () => {
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