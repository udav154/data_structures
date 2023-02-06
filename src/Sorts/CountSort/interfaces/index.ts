type TarrayNode = number;
type Tidx = number;
type Tarray = TarrayNode[];


type Tsort = (arr: Tarray, max: number, min?: number) => Tarray;

export { TarrayNode, Tidx, Tarray, Tsort };