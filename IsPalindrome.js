function isPalindrome(s) {
  let str = s
    .replace(/[^0-9a-zA-Z]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();

  let ori = str;
  let modi = str.split('').reverse().join('');

  console.log(ori);
  console.log(modi);

  if (ori === modi) {
    return true;
  } else {
    return false;
  }
}

let s = 'Was it a car or a cat I saw?';
let out = isPalindrome(s);

console.log(out);
