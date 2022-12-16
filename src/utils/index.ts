import { Trandom } from './interfaces';

const random: Trandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { random };
