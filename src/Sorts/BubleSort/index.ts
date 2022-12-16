/* eslint-disable no-param-reassign */
import { TarrayNode, Tidx, Tarray, Tswap, Tsort } from './interfaces';

class BubleSort {
  static swap: Tswap = (array, idx1, idx2) => {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };

  static sort: Tsort = (array) => {
    const arrayCopy = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arrayCopy[i] < arrayCopy[j]) {
          this.swap(arrayCopy, i, j);
        }
      }
    }
    return arrayCopy;
  };
}

const arr = [0, 5, 6, 1, 9, 45, 14, 21, 11, 2];

const sorted = BubleSort.sort(arr);
console.log(sorted);

export default BubleSort;
