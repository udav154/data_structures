import LinkedListNode from '../LinkedListNode';

type TnodeList = LinkedListNode;
type TnodeNext = TnodeList | null;
type TnodePrev = TnodeList | null;
type TnodeValue = number;

type Tappend = (head: TnodeList, value: number) => TnodeList;

type Tprepend = (head: TnodeList, value: number) => TnodeList;

type Tget = (head: TnodeList, value: TnodeValue) => TnodeList | null;

type Tgenerate = (count: number) => TnodeList;

type TgetLength = (head: TnodeList) => number;

type Tdelete = (head: TnodeList, value: number) => TnodeList | null;

type Tclear = () => [];

export {
  TnodeList,
  TnodeNext,
  TnodePrev,
  TnodeValue,
  Tappend,
  Tprepend,
  Tdelete,
  Tget,
  Tgenerate,
  TgetLength,
  Tclear,
};
