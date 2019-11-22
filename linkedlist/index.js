// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    return (this.head = null);
  }

  removeFirst() {
    let node = this.head;
    if (!this.head.next) this.head = null;
    if (node.next) {
      return (this.head = node.next);
    }
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);
    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = prev.next;
      node = node.next;
    }
    prev.next = null;
  }
  insertLast(data) {
    if (!this.head) return (this.head = new Node(data));
    if (this.getLast()) this.getLast().next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) return (this.head = this.head.next);
    let prev = this.getAt(index - 1);
    if (!prev.next) return;
    if (prev) prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) return (this.head = new Node(data));
    if (index === 0) {
      return this.insertFirst(data);
    }

    let prev = this.getAt(index - 1) || this.getLast();
    if (!prev.next) this.insertLast(data);
    prev.next = new Node(data, prev.next);
  }
}

module.exports = { Node, LinkedList };
