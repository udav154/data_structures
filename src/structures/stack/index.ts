import { random } from '../../utils';
import { Tadd, Tclear, Tget, Tgenerate } from './interfaces';

class Stack {
  static add: Tadd = (stack, element) => {
    return [...stack, element];
  };

  static get: Tget = (stack) => {
    if (stack.length === 0) return { element: null, stack };
    const getedElement = stack[stack.length - 1];
    const copyStack = [...stack];
    copyStack.length -= 1;
    return { element: getedElement, stack: copyStack };
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

const singleStack = new Stack();
export default singleStack;
