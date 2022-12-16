import { random } from '../../utils';
import {
  Tgenerate,
  TgetMax,
  TgetMin,
  Tadd,
  Theap,
  Tclear,
  Theapify,
  TheapNode,
} from './interfaces';

class Heap {
  static heapify: Theapify = (heap, idx) => {
    const heapCopy: Theap = [...heap];
    const heapSize = heapCopy.length;
    let leftChildIdx;
    let rightChildIdx;
    let largestChildIdx;
    let currIdx = idx;
    for (;;) {
      leftChildIdx = 2 * currIdx + 1;
      rightChildIdx = 2 * currIdx + 2;
      largestChildIdx = currIdx;

      if (
        leftChildIdx < heapSize &&
        heapCopy[leftChildIdx] > heapCopy[largestChildIdx]
      ) {
        largestChildIdx = leftChildIdx;
      }

      if (
        rightChildIdx < heapSize &&
        heapCopy[rightChildIdx] > heapCopy[largestChildIdx]
      ) {
        largestChildIdx = rightChildIdx;
      }

      if (largestChildIdx === currIdx) {
        break;
      }

      const temp = heap[currIdx];
      heapCopy[currIdx] = heapCopy[largestChildIdx];
      heapCopy[largestChildIdx] = temp;
      currIdx = largestChildIdx;
    }
    return heapCopy;
  };

  static add: Tadd = (heap, value) => {
    const newHeap = [...heap, value];
    let i = heap.length - 1;
    let parent = (i - 1) / 2;

    while (i > 0 && newHeap[parent] < newHeap[i]) {
      const temp = newHeap[i];
      newHeap[i] = newHeap[parent];
      newHeap[parent] = temp;

      i = parent;
      parent = (i - 1) / 2;
    }
    return newHeap;
  };

  static getMax: TgetMax = (heap) => {
    const heapCopy = [...heap];
    const max = heapCopy[0];
    const heapSize = heapCopy.length;
    heapCopy[0] = heapCopy[heapSize - 1];
    this.heapify(heapCopy, 0);
    return { value: max, heap: heapCopy };
  };

  static getMin: TgetMin = (heap) => {
    const min = heap[heap.length - 1];
    const newHeap = [...heap];
    newHeap.length -= 1;
    return { value: min, heap: newHeap };
  };

  static clear: Tclear = () => {
    return [];
  };

  static generate: Tgenerate = (
    count = 10,
    min = 0,
    max = 100,
    repite = false
  ) => {
    const heap: Theap = [];
    for (let i = 0; i < count; i++) {
      const newElement = random(min, max);
      if (!repite && heap.includes(newElement)) {
        i -= 1;
        continue;
      }
      heap.push(newElement);
    }
    for (let i = 0; i < heap.length; i++) {
      this.heapify(heap, i);
    }
    return heap;
  };
}

const singleHeap = new Heap();
export default singleHeap;
