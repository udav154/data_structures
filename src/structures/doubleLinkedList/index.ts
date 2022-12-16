/* eslint-disable no-param-reassign */
import LinkedListNode from './LinkedListNode';
import {
  TnodeList,
  TnodeNext,
  Tappend,
  Tprepend,
  Tdelete,
  Tget,
  Tgenerate,
  TgetLength,
  Tclear,
} from './interfaces';

class LinkedList {
  /**
   * add as tail (to end)
   * @param head first element
   * @param value l
   * @returns head
   */
  static append: Tappend = (head, value) => {
    const newNode = new LinkedListNode(value, null, null);
    let end = head;
    while (end.next !== null) {
      end = end.next;
    }
    end.next = newNode;
    newNode.prev = end;
    return head;
  };

  static prepend: Tprepend = (head, value) => {
    const newNode = new LinkedListNode(value, head, null);
    head.prev = newNode;
    return newNode;
  };

  static getLength: TgetLength = (head) => {
    let end = head;
    let count = 1;
    while (end.next !== null) {
      end = end.next;
      count += 1;
    }
    return count;
  };

  static get: Tget = (head, value) => {
    let element: TnodeList | null = head;
    while (element?.value !== value && element !== null) {
      element = element.next;
    }
    return element;
  };

  static generate: Tgenerate = (count = 10) => {
    const head: TnodeList = new LinkedListNode(0, null, null);
    let prev = head;
    for (let i = 1; i < count; i++) {
      const nextId = i + 1;
      const next: TnodeNext =
        nextId >= count ? null : new LinkedListNode(nextId, null, prev);
      prev.next = next;
      if (next !== null) prev = next;
    }
    return head;
  };

  static delete: Tdelete = (head, value) => {
    let current: TnodeList | null = head;
    let prev = null;

    while (current?.value !== value && current !== null) {
      current = current.next;
      prev = current;
    }

    if (current?.value === value) {
      if (prev) prev.next = current.next;
      if (current.next) current.next.prev = prev;
      current.next = null;
      current.prev = null;
    }
    return current;
  };

  static clear: Tclear = () => {
    return [];
  };
}

const singleLinkedList = new LinkedList();
export default singleLinkedList;
