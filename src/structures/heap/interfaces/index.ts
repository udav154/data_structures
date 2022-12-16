type TheapNode = number;
type Theap = TheapNode[];

interface IgetResult {
  value: TheapNode | null;
  heap: Theap;
}

type Tgenerate = (
  count: number,
  min?: number,
  max?: number,
  repite?: boolean
) => number[];

type Theapify = (heap: Theap, idx: number) => Theap;

type TgetMax = (heap: Theap) => IgetResult;

type TgetMin = (heap: Theap) => IgetResult;

type Tadd = (heap: Theap, value: TheapNode) => Theap;

type Tclear = () => [];

export { Tgenerate, TgetMax, TgetMin, Tadd, Theap, Tclear, Theapify, TheapNode};
