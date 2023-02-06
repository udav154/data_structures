/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import { TarrayNode, Tidx, Tarray, Tsort } from './interfaces';

// числа только целые натуральные максимум до 1000
class CountSort {
 static sort: Tsort = (arr = [], max, min = 0) => {
    const countArr = new Array(max + 1 - min).fill(0);

    for (let i = 0; i < arr.length; i++) {
      countArr[arr[i] - min] += 1;
    }

    const res:Tarray = [];

    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] === 0) continue;
        for (let j = 0; j < countArr[i]; j++) {
        res.push(i+min)
      }
    }
    return res
  }
}

const arr = [9,5,3,4,2,5,9,7]

const sorted = CountSort.sort(arr, 9, 2 );

console.log('sorted', sorted);

export default CountSort