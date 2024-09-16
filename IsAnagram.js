function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sarr = s.split("").sort();
  const tarr = t.split("").sort();
  return tarr.every((v, index) => v === sarr[index]);
}

let s = "racecar",
  t = "carrace",
  b;
b = isAnagram(s, t);
console.log(b);
