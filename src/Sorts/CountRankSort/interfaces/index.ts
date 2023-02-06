type TarrayNode = number;
type Tidx = number;
type Tarray = TarrayNode[];

type TgetDigit = (num: number, place: number) => number;

type TdigitCount = (num: number) => number;

type TmostDigits = (nums: Tarray) => number;

type Tsort = (arr: Tarray) => Tarray;

export { TarrayNode, Tidx, Tarray, Tsort, TgetDigit, TdigitCount, TmostDigits };
