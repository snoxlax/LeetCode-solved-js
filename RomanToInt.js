function romanToInt(s) {
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let i = 0;
  let num = 0;

  while (i < s.length) {
    let n = map.get(s[i]);
    let m = map.get(s[i + 1]);
    if (n < m) {
      num -= n;
    } else {
      num += n;
    }
    i++;
  }

  return num;
}

let s = "VII",
  s2 = "LVIII",
  s3 = "MCMXCIV";

console.log(romanToInt(s));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
