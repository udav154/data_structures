/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import { TarrayNode, Tidx, Tarray, Tswap, Tsort } from './interfaces';

class QuickSort {
  static swap: Tswap = (array, idx1, idx2) => {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };

  static sort: Tsort = (array) => {
    if (array.length <= 1) return array;
    const arrCopy = [...array];
    let pivotIdx = 0;
    let i = array.length - 1;
    let side = false;
    while (pivotIdx !== i) {
      if (arrCopy[pivotIdx] > arrCopy[i]) {
        this.swap(arrCopy, pivotIdx, i);
        side = !side;
      }
      side ? pivotIdx++ : i--;
    }
    const pivotGreatArr =
      pivotIdx !== array.length ? pivotIdx + 1 : array.length;
    return [
      ...this.sort(arrCopy.slice(0, pivotIdx)),
      arrCopy[pivotIdx],
      ...this.sort(arrCopy.slice(pivotGreatArr, array.length)),
    ];
  };
}

const arr = [0, 5, 6, 1, 9, 45, 14, 21, 11, 2];

const sorted = QuickSort.sort(arr);
console.log(sorted);
