function evalRPN(tokens) {
  let num1 = 0;
  let num2 = 0;
  const stack = [];
  for (let i of tokens) {
    if (!isNaN(parseInt(i))) {
      stack.push(parseInt(i));
    }
    if (i === '+') {
      num2 = stack.pop();
      num1 = stack.pop();
      let sum = num1 + num2;
      stack.push(sum);
    } else if (i === '-') {
      num2 = stack.pop();
      num1 = stack.pop();
      let sum = num1 - num2;
      stack.push(sum);
    } else if (i === '/') {
      num2 = stack.pop();
      num1 = stack.pop();
      let sum = num1 / num2;
      stack.push(parseInt(sum));
    } else if (i === '*') {
      num2 = stack.pop();
      num1 = stack.pop();
      let sum = num1 * num2;
      stack.push(sum);
    }
  }
  return stack.pop();
}

let input = ['1', '2', '+', '3', '*', '4', '-'];
let output = evalRPN(input);
console.log(output);
