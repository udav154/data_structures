/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import { TarrayNode, Tidx, Tarray, Tswap, Tsort, Tmerge } from './interfaces';

class MergeSort {
  static swap: Tswap = (array, idx1, idx2) => {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };

  static merge: Tmerge = (array1 = [], array2 = []) => {
    const resArray:Tarray = [];
    const array1Length = array1.length;
    const array2Length = array2.length;

    let i = 0;
    let j = 0;
    while (i < array1Length && j < array2Length) {
      if (array1[i] < array2[j]) {
        resArray[i + j] = array1[i];
        i++;
      } else {
        resArray[i + j] = array2[j];
        j++;
      }
    }

    if (i === array1Length) {
      for (; j < array2Length; j++) {
        resArray[j + i] = array2[j];
      }
    } else {
      for (; i < array1Length; i++) {
        resArray[j + i] = array1[i];
      }
    }
    return resArray;
  };

  static sort: Tsort = (array = []) => {
    if (array.length < 2) return array;

    if (array.length === 2) {
      const newArr = [...array];
      if (array[0] > array[1]) {
        this.swap(newArr, 0, 1);
      }
      return newArr;
    }
    const meanIdx = Math.floor(array.length / 2);
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < array.length; i++) {
      i < meanIdx ? leftArr.push(array[i]) : rightArr.push(array[i]);
    }
    const sortedLeft = this.sort(leftArr);
    const sortedRight = this.sort(rightArr);
    return this.merge(sortedLeft, sortedRight);
  };
}

const arr = [64, 3, 3, 5, 11, 67, 43, 1, 0];

const sorted = MergeSort.sort(arr);

console.log('sorted', sorted);
