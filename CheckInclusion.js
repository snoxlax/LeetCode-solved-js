function checkInclusion(s1, s2) {
  let hash1 = {};
  for (let c of s1) {
    hash1[c] = (hash1[c] || 0) + 1;
  }

  let need = Object.keys(hash1).length;
  for (let i = 0; i < s2.length; i++) {
    let count = 0;
    let hash2 = {};
    for (let j = i; j < s2.length; j++) {
      hash2[s2[j]] = (hash2[s2[j]] || 0) + 1;
      if ((hash1[s2[j]] || 0) < hash2[s2[j]]) {
        break;
      }
      if ((hash1[s2[j]] || 0) === hash2[s2[j]]) {
        count++;
      }
      if (count === need) {
        return true;
      }
    }
  }
  return false;
}

let s1 = 'abc';
let s2 = 'lecabee';

let output1 = checkInclusion(s1, s2);

let s3 = 'abc';
let s4 = 'lecaabee';

let output2 = checkInclusion(s3, s4);

console.log(output1, output2);
