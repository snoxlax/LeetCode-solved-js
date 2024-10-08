function intToRoman(num) {
  let romanlist = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);
  let res = "";

  for (let [value, symbol] of romanlist) {
    while (num >= value) {
      num -= value;
      res += symbol;
    }
  }

  return res;
}

let number = intToRoman(58);
console.log(number);
