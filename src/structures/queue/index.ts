import { random } from '../../utils';
import { Tadd, Tget, Tgenerate, Tclear } from './interfaces';

class Queue {
  static add: Tadd = (queue, element) => {
    return [...queue, element];
  };

  static get: Tget = (queue) => {
    if (queue.length === 0) return { element: null, queue };
    const getedElement = queue[0];
    const copyQueue: number[] = [];
    for (let i = 1; i < queue.length; i++) {
      copyQueue[i - 1] = copyQueue[i];
    }
    return { element: getedElement, queue: copyQueue };
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
    const stack: number[] = [];
    for (let i = 0; i < count; i++) {
      const newElement = random(min, max);
      if (!repite && stack.includes(newElement)) {
        i -= 1;
        continue;
      }
      stack.push(newElement);
    }
    return stack;
  };
}

const singleQueue = new Queue();
export default singleQueue;
