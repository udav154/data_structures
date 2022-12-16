/* eslint-disable no-param-reassign */
import { TarrayNode, Tidx, Tarray, TgetMin, Tswap, Tsort } from './interfaces';

class ChoseSort {
  static getMin: TgetMin = (arr, start, end) => {
    let count = 0;
    let assignment = 1;
    let minIdx = start;
    for (let i = start; i <= end; i++) {
      assignment += 1;
      if (arr[i] < arr[minIdx]) {
        minIdx = i;
        assignment += 1;
      }
      count += 2;
    }
    return { minIdx, count, assignment };
  };

  static swap: Tswap = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  static sort: Tsort = (array) => {
    let compareCount = 0;
    let swapCount = 0;
    let assignmentCount = 1;
    const newarr = [...array];
    const lastIteration = array.length - 1;
    for (let i = 0; i < lastIteration; i++) {
      const currMinIdx = i;
      compareCount += 1;
      assignmentCount += 2;
      const { minIdx, count, assignment } = this.getMin(
        newarr,
        currMinIdx + 1,
        lastIteration
      );
      compareCount += count;
      assignmentCount += assignment;
      if (newarr[minIdx] < newarr[currMinIdx]) {
        this.swap(newarr, currMinIdx, minIdx);
        swapCount += 3;
      }
    }
    console.log(
      'compareCount:',
      compareCount,
      'swapCount:',
      swapCount,
      'assignmentCount:',
      assignmentCount
    );
    return newarr;
  };
}

const arr = [0, 5, 6, 1, 9, 45, 14, 21, 11, 2];

const sorted = ChoseSort.sort(arr);
console.log(sorted);
