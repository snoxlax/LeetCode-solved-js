function dailyTemperatures(temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];
  stack.push({ temp: temperatures[0], index: 0 });
  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1].temp) {
      res[stack[stack.length - 1].index] = i - stack[stack.length - 1].index;
      let temp = stack.pop();
    }
    stack.push({ temp: temperatures[i], index: i });
  }
  return res;
}

let temperatures1 = [30, 38, 30, 36, 35, 40, 28];
let Output1 = dailyTemperatures(temperatures1);
console.log(Output1);

let temperatures2 = [73, 74, 75, 71, 69, 72, 76, 73];
let Output2 = dailyTemperatures(temperatures2);
console.log(Output2);

let temperatures3 = [0, 0, 0, 0, 0, 0, 0];
let Output3 = dailyTemperatures(temperatures3);
console.log(Output3);
