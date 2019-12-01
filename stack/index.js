// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.record = [];
  }
  push(record) {
    return this.record.push(record);
  }
  pop() {
    return this.record.pop();
  }

  peek() {
    return this.record[this.record.length - 1];
  }
}

module.exports = Stack;
