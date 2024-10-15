class MinStack {
  constructor() {
    this.arr = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.arr.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    return this.arr.pop();
  }

  /**
   * @return {number}
   */
  top() {
    let num = this.arr.pop();
    this.arr.push(num);
    return num;
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.arr.length === 0) {
      return -1;
    }

    if (this.arr.length === 1) {
      let num = this.arr.pop();
      this.arr.push(num);
      return num;
    }

    let temp = [];
    let min = this.arr.pop();
    temp.push(min);

    while (this.arr.length > 0) {
      let num = this.arr.pop();
      if (num < min) {
        min = num;
      }
      temp.push(num);
    }

    while (temp.length > 0) {
      this.arr.push(temp.pop());
    }

    return min;
  }
}

let minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top(); // return 2
minStack.getMin(); // return 1

let output = minStack;

console.log(output);
