import { getMergeSortAnimations, getQuickSortAnimations } from './sortingAlgorithms/sortingAlgorithms.js';


const PRIMARY_COLOR = '#0073e6'; // Amazon Prime blue
const SECONDARY_COLOR = 'red';

// MergeSort

export const mergeSort = ({ array, speed }) => {
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
    let animationIndex = 0;

    const animateSorting = () => {
        if (animationIndex >= animations.length) return;

        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = animationIndex % 2 === 0;

        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[animationIndex];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = animationIndex % 4 < 2 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                animateSorting(); // Continue the animation
            }, speed);
        } else {
            const [barIdx, newHeight] = animations[animationIndex];
            const barStyle = arrayBars[barIdx].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
                animateSorting(); // Continue the animation
            }, speed);
        }

        animationIndex++;
    };

    // Start the animation
    animateSorting();
};



export const bubbleSort = () => {
    // Implement bubbleSort logic here
};

export const selectionSort = () => {

}

export const insertionSort = () => {

}


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