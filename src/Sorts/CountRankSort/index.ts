/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import {
  TarrayNode,
  Tidx,
  Tarray,
  Tsort,
  TgetDigit,
  TdigitCount,
  TmostDigits,
} from './interfaces';

class RadixSort {
  static getDigit: TgetDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  // helper
  static digitCount: TdigitCount = (num) => {
    if (num === 0) {
      return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  // helper
  static mostDigits: TmostDigits = (nums) => {
    let max = 0;
    for (let num of nums) {
      max = Math.max(max, this.digitCount(num));
    }
    return max;
  };

  static sort: Tsort = (nums) => {
    let copyArr = [...nums];
    let maxDigits = this.mostDigits(nums);
    for (let k = 0; k < maxDigits; k++) {
      let buckets:Tarray[] = Array.from({ length: 10 }, () => []);

      for (let num of copyArr) {
        let digit = this.getDigit(num, k);
        buckets[digit].push(num);
      }
      copyArr = [].concat(...buckets);
    }
    return copyArr;
  };
}

const arr = [329, 295, 13, 4, 1002, 25, 3979, 7];

const sorted = RadixSort.sort(arr);

console.log('sorted', sorted);
