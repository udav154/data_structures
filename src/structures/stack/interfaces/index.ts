type TStack = number[];

interface IgetResult {
  element: number | null;
  stack: number[];
}

type Tgenerate = (
  count: number,
  min?: number,
  max?: number,
  repite?: boolean
) => number[];

type Tget = (stack: number[]) => IgetResult;

type Tadd = (stack: number[], element: number) => number[];

type Tclear = () => [];

export { Tgenerate, Tclear, Tadd, TStack, Tget };
