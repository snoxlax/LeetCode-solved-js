function plusOne(digits) {
  let one = 1;
  let i = 0;
  digits.reverse();

  while (one !== 0) {
    if (i < digits.length) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        one = 0;
      }
    } else {
      digits.push(one);
      one = 0;
    }
    i++;
  }
  digits.reverse();
  return digits;
}

let digits = [1, 2, 3, 4];

let output = plusOne(digits);

console.log(output);

digits = [9, 9, 9];

output = plusOne(digits);

console.log(output);
