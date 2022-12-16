import { TnodeNext, TnodeValue } from '../interfaces';

class LinkedListNode {
  _value: TnodeValue;

  _next: TnodeNext;

  constructor(value: TnodeValue, next: TnodeNext) {
    this._value = value;
    this._next = next;
  }

  set next(value: TnodeNext) {
    this._next = value;
  }

  get next(): TnodeNext {
    return this._next;
  }

  get value(): TnodeValue {
    return this._value;
  }
}

export default LinkedListNode;
