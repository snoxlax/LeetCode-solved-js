let target = 100;
let position = [0, 2, 4];
let speed = [4, 2, 1];

let pair = position.map((p, i) => [p, speed[i]]);
pair.sort((a, b) => b[0] - a[0]);
console.log(pair);

let currTime1 = (target - pair[0][0]) / pair[0][1];
let currTime2 = (target - pair[1][0]) / pair[1][1];
let currTime3 = (target - pair[2][0]) / pair[2][1];

console.log(currTime1, currTime2, currTime3);
