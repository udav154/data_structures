/* eslint-disable no-param-reassign */
import { TarrayNode, Tidx, Tarray, Tswap, Tsort } from './interfaces';

class PastSort {
  static swap: Tswap = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  static sort: Tsort = (array) => {
    let compareCount = 0;
    let swapCount = 0;
    let assignmentCount = 1; // i = 1
    const newarr = [...array];

    for (let i = 1; i < array.length; i++) {
      compareCount += 1; // i < array.length
      assignmentCount += 1; // i++
      for (let j = i - 1; j >= 0; j--) {
        assignmentCount += 1; // j--
        compareCount += 2; // j >= 0 ;;; newarr[j] > newarr[j + 1]
        if (newarr[j] > newarr[j + 1]) {
          this.swap(newarr, j, j + 1);
          swapCount += 3;
        } else break;
      }
    }
    console.log(
      'compareCount:',
      compareCount,
      'swapCount',
      swapCount,
      'assignmentCount',
      assignmentCount
    );
    return newarr;
  };
}

const arr = [0, 5, 6, 1, 9, 45, 14, 21, 11, 2];

const sorted = PastSort.sort(arr);
console.log(sorted);

export default PastSort;
