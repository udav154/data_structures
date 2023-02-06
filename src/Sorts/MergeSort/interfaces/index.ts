type TarrayNode = number;
type Tidx = number;
type Tarray = TarrayNode[];

type Tswap = (arr: Tarray, idx1: Tidx, idx2: Tidx) => void;

type Tsort = (array: Tarray) => Tarray;

type Tmerge = (array1: Tarray, array2: Tarray) => Tarray;

export { TarrayNode, Tidx, Tarray, Tswap, Tsort, Tmerge };