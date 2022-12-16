type TarrayNode = number;
type Tidx = number;
type Tarray = TarrayNode[];

interface IgetMinResult {
  minIdx: Tidx;
  count: number;
  assignment: number;
}

type TgetMin = (array: Tarray, start: Tidx, end: Tidx) => IgetMinResult;

type Tswap = (arr: Tarray, idx1: Tidx, idx2: Tidx) => void;

type Tsort = (array: Tarray) => Tarray;

export { TarrayNode, Tidx, Tarray, TgetMin, Tswap, Tsort };
