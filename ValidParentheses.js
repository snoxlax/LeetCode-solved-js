function isValid(s) {
  const stack = [];
  const str = s.split('');
  const openb = new Map([
    ['(', 1],
    ['{', 2],
    ['[', 3],
  ]);
  const closeb = new Map([
    [')', 1],
    ['}', 2],
    [']', 3],
  ]);
  const bracky = new Map([
    ['()', 1],
    ['{}', 2],
    ['[]', 3],
  ]);

  for (let i of str) {
    if (openb.has(i)) {
      stack.push(i);
    }
    if (closeb.has(i)) {
      if (stack.length === 0) {
        return false;
      }
      let temp = stack.pop();
      let check = temp + i;
      if (!bracky.has(check)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

let input1 = '[]';

let output1 = isValid(input1);

let input2 = '({[]})';

let output2 = isValid(input2);

let input3 = '({]})';

let output3 = isValid(input3);

console.log(output1);

console.log(output2);

console.log(output3);
