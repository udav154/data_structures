import { TnodeNext, TnodeValue, TnodePrev } from '../interfaces';

class LinkedListNode {
  _value: TnodeValue;

  _next: TnodeNext;

  _prev: TnodePrev;

  constructor(value: TnodeValue, next: TnodeNext, prev: TnodePrev) {
    this._value = value;
    this._next = next;
    this._prev = prev;
  }

  set next(value: TnodeNext) {
    this._next = value;
  }

  get next(): TnodeNext {
    return this._next;
  }

  set prev(value: TnodePrev) {
    this._prev = value;
  }

  get prev(): TnodePrev {
    return this._prev;
  }

  get value(): TnodeValue {
    return this._value;
  }
}

export default LinkedListNode;
