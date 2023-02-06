type TvalueNode = number;
type MyTuple<T> = {
  value: TvalueNode;
  right: T | null;
  left: T | null;
  parent: T | null;
};

interface TtreeNode extends MyTuple<TtreeNode> {}

type TcreateNewNode = (props: {
  value: TvalueNode;
  left?: TtreeNode | null;
  right?: TtreeNode | null;
  parent?: TtreeNode | null;
}) => TtreeNode;

type Tadd = (root: TtreeNode, value: TvalueNode) => void;

type TgenerateFromArray = (array: TvalueNode[]) => TtreeNode;

type Tgenerate = (count: number) => TtreeNode;

type TgetLengthWidth = (root: TtreeNode) => TvalueNode[];

type TgetLengthDepth = (
  root: TtreeNode,
  enumeration?: string[]
) => TvalueNode[];

type Tfind = (root: TtreeNode, value: TvalueNode) => TtreeNode | null;

type TforEachWidth = (
  root: TtreeNode,
  callback: (props: unknown) => unknown
) => void;

type TforEachDepth = (
  root: TtreeNode,
  callback: (props: unknown) => unknown,
  enumeration?: string[]
) => void;

type Tremove = (
  root: TtreeNode,
  value: TvalueNode,
  isDeleteBranch?: boolean
) => void;

export {
  TvalueNode,
  TtreeNode,
  TcreateNewNode,
  Tadd,
  TgenerateFromArray,
  Tgenerate,
  TgetLengthWidth,
  TgetLengthDepth,
  Tfind,
  TforEachWidth,
  TforEachDepth,
  Tremove,
};
