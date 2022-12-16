import LinkedListNode from './LinkedListNode';
import {
  Tappend,
  TgetLength,
  Tclear,
  Tget,
  Tgenerate,
  TnodeList,
  TnodeNext,
  Tprepend,
  Tdelete,
} from './interfaces';

class LinkedList {
  static append: Tappend = (head, value) => {
    const newNode = new LinkedListNode(value, null);
    let end = head;
    while (end.next !== null) {
      end = end.next;
    }
    end.next = newNode;
    return head;
  };

  static prepend: Tprepend = (head, value) => {
    const newNode = new LinkedListNode(value, head);
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
    const head: TnodeList = new LinkedListNode(0, null);
    let prev = head;
    for (let i = 1; i < count; i++) {
      const nextValue = i + 1;
      const next: TnodeNext =
        nextValue >= count ? null : new LinkedListNode(nextValue, null);
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
      current.next = null;
    }
    return current;
  };

  static clear: Tclear = () => {
    return [];
  };
}

const singleLinkedList = new LinkedList();
export default singleLinkedList;
