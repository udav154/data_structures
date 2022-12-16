type TQueue = number[];

interface IgetResult {
  element: number | null;
  queue: number[];
}

type Tgenerate = (
  count: number,
  min?: number,
  max?: number,
  repite?: boolean
) => number[];

type Tget = (queue: number[]) => IgetResult;

type Tadd = (queue: number[], element: number) => number[];

type Tclear = () => [];

export { Tgenerate, Tget, Tadd, TQueue, Tclear };