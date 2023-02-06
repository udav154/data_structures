import { random } from '../../utils/index';
import {
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
} from './interfaces';
class BTree {
  static createNewNode: TcreateNewNode = ({
    value,
    left = null,
    right = null,
    parent = null,
  }) => ({
    value,
    left,
    right,
    parent,
  });

  static add: Tadd = (root, value) => {
    let current = root;
    let next = null;
    while (true) {
      if (current.value > value) {
        next = current.left;
      } else {
        next = current.right;
      }
      if (next !== null) {
        current = next;
      } else {
        break;
      }
    }

    if (current.value > value) {
      current.left = this.createNewNode({ value, parent: current });
    } else {
      current.right = this.createNewNode({ value, parent: current });
    }
  };

  static generateFromArray: TgenerateFromArray = (array) => {
    let res = this.createNewNode({ value: array[0] });
    // console.log('value', res.value)
    for (let i = 1; i < array.length; i++) {
      let value = array[i];
      // console.log('value', value)
      this.add(res, value);
    }
    return res;
  };

  static generate: Tgenerate = (count) => {
    let res = this.createNewNode({ value: random(0, 100) });
    // console.log('value', res.value)
    for (let i = 1; i < count; i++) {
      let value = random(0, 100);
      // console.log('value', value)
      this.add(res, value);
    }
    return res;
  };

  static getLengthWidth: TgetLengthWidth = (root) => {
    // if (!root) return;
    let quiet: TtreeNode[] = [root];
    let arrNodesByWidth = [];

    while (quiet.length) {
      const tempCurrent = quiet.shift();
      if (tempCurrent) {
        if (tempCurrent.left) {
          quiet.push(tempCurrent.left);
        }
        if (tempCurrent.right) {
          quiet.push(tempCurrent.right);
        }
        arrNodesByWidth.push(tempCurrent.value);
      }
    }
    return arrNodesByWidth;
  };

  static getLengthDepth: TgetLengthDepth = (
    root,
    enumeration = ['left', 'right']
  ) => {
    enumeration as string[];
    let arrNodesByDepth = [root.value];
    let res = [];
    for (let i = 0; i < enumeration.length; i++) {
      if (!root.hasOwnProperty(enumeration[i])) continue;
      // @ts-ignore
      let elem = root[enumeration[i]];
      if (elem !== null) {
        res.push(...this.getLengthDepth(elem, enumeration));
      }
    }
    return arrNodesByDepth.concat(res);
  };

  static find: Tfind = (root, value) => {
    let node: TtreeNode | null = root;
    while (node !== null && node?.value !== value) {
      if (node.value < value) {
        node = node.right;
      } else node = node.left;
    }
    return node;
  };

  static forEachWidth: TforEachWidth = (root, callback) => {
    if (!root) return;
    let quiet = [root];

    while (quiet.length) {
      const tempCurrent = quiet.shift();
      if (tempCurrent) {
        if (tempCurrent.left) {
          quiet.push(tempCurrent.left);
        }
        if (tempCurrent.right) {
          quiet.push(tempCurrent.right);
        }
        callback(tempCurrent);
      }
    }
  };

  static forEachDepth: TforEachDepth = (
    root,
    calblack = () => {},
    enumeration = ['left', 'right']
  ) => {
    enumeration as string[];
    for (let i = 0; i < enumeration.length; i++) {
      if (!root.hasOwnProperty(enumeration[i])) continue;
      // @ts-ignore
      let elem = root[enumeration[i]];
      if (elem !== null) {
        // @ts-ignore
        calblack(...this.getLengthDepth(elem, enumeration));
      }
    }
  };

  static remove: Tremove = (root, value, isDeleteBranch = true) => {
    let elem: TtreeNode | null = this.find(root, value);
    if (elem === null) return;
    if (elem.parent) {
      if (elem.parent?.left && elem.parent?.left.value === elem.value)
        elem.parent.left = null;
      if (elem.parent?.right && elem.parent?.right.value === elem.value)
        elem.parent.right = null;
    } else {
      elem = null;
    }
    if (!isDeleteBranch && elem !== null) {
      const callback = (value: TvalueNode) => {
        this.add(root, value);
      };
      const deleded = this.getLengthWidth(elem) || [];
      if (deleded.length < 2) return;
      for (let i = 1; i < deleded.length; i++) {
        callback(deleded[i]);
      }
    }
  };
}

const tree = BTree.generateFromArray([7, 9, 10, 8, 11, 4, 5, 3, 6, 2, 1, 12]);
// console.log('aaaa', aaa);

// const depth = BTree.getLengthDepth(tree);

// const width = BTree.getLengthWidth(tree);

// const findElem = BTree.find(tree, 6);

// BTree.remove(tree, 3, false);
// const width = BTree.getLengthWidth(tree);
// console.log('width', width);
