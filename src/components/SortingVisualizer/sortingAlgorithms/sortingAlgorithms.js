export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  const auxiliaryArray = array.slice();
  quickSortHelper(auxiliaryArray, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;

  const pivotIdx = partition(mainArray, startIdx, endIdx, animations);

  quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
  quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
}

function partition(mainArray, startIdx, endIdx, animations) {
  const pivotValue = mainArray[startIdx];
  let left = startIdx + 1;
  let right = endIdx;
  animations.push([startIdx, startIdx, false]);

  while (left < right) {
    while (left <= right && mainArray[left] < pivotValue) {
      // animations.push([left, startIdx, false]); // Compare animation
      // animations.push([left, startIdx, false]); // Compare animation
      left++;
    }
    while (right >= left && mainArray[right] > pivotValue) {
      // animations.push([right, startIdx, false]); // Compare animation
      // animations.push([right, startIdx, false]); // Compare animation
      right--;
    }
    if (left >= right) break;

    // animations.push([left, right, false]); // Swap animation
    animations.push([left, right, true]); // Swap animation
    // animations.push([left, right, false]); // Swap animation
    const temp = mainArray[left];
    mainArray[left] = mainArray[right];
    mainArray[right] = temp;
  }

  // animations.push([startIdx, right, false]); // Swap animation
  animations.push([startIdx, right, true]); // Swap animation
  // animations.push([startIdx, right, false]); // Swap animation
  const temp = mainArray[startIdx];
  mainArray[startIdx] = mainArray[right];
  mainArray[right] = temp;

  return right;
}



export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array.slice();

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      // Push indices for comparison
      animations.push([i, i + 1]);
      // Revert color back to primary
      animations.push([i, i + 1]);

      if (array[i] > array[i + 1]) {
        // Push indices for swap
        animations.push([i, i + 1, true]);
        // Swap elements
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return animations;
}


export function getSelectionSortAnimations(array) {
  const animations = [];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // Push indices for comparison
      animations.push([i, j, false]);
      // Push indices to revert color
      animations.push([i, j, false]);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Push indices for swap
    animations.push([i, minIndex, true]);
    // Push indices to revert color after swap
    animations.push([i, minIndex, false]);

    // Swap array elements
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return animations;
}


export const getInsertionSortAnimations = (array) => {
  const animations = [];
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    animations.push([i, j, false]); // Highlight current elements being compared

    while (j >= 0 && array[j] > key) {
      animations.push([j + 1, j, true]); // Swap animation
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;

    // Highlight the sorted element
    animations.push([i, i, false]);
  }

  return animations;
};
