function encode(strs) {
  let result = '';
  for (let s of strs) {
    result += `${s.length}#${s}`;
  }
  return result;
}

function decode(str) {
  let string = [];
  let temp = str.split('');
  let i = 0;

  while (i < str.length) {
    let lengthStr = '';
    while (i < str.length && str[i] !== '#') {
      lengthStr += str[i];
      i++;
    }
    i++; //#
    let length = Number(lengthStr);
    let substring = str.slice(i, i + length);
    string.push(substring);
    i += length;
  }
  return string;
}

let input1 = ['leet', 'code', 'leet', 'code', 'love', 'you'];
let input2 = ['bip', 'bop', 'mip', 'boop', 'im', 'robot'];

let encoded1 = encode(input1);
let decoded1 = decode(encoded1);

let encoded2 = encode(input2);
let decoded2 = decode(encoded2);

console.log(decoded1);
console.log(decoded2);
