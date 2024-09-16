function getKey(string) {
  const splited = string.split("");
  return splited.sort().join("");
}

function groupAnagrams(strs) {
  let bucket = {};
  for (let i of strs) {
    let key = getKey(i);
    if (!bucket[key]) {
      bucket[key] = [i];
    } else {
      bucket[key].push(i);
    }
  }
  return Object.values(bucket);
}

let strs = ["act", "pots", "tops", "cat", "stop", "hat"],
  grp;
grp = groupAnagrams(strs);
console.log(grp);
