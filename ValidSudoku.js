function isValidSudoku(board) {
  function hasDuplicates(arr) {
    let check = {};
    for (let num of arr) {
      if (num !== '.') {
        if (check[num]) {
          return true;
        }
        check[num] = true;
      }
    }
    return false;
  }

  for (let i = 0; i < 9; i++) {
    if (hasDuplicates(board[i])) {
      return false;
    }
  }

  for (let j = 0; j < 9; j++) {
    let column = [];
    for (let i = 0; i < 9; i++) {
      column.push(board[i][j]);
    }
    if (hasDuplicates(column)) {
      return false;
    }
  }

  for (let startRow = 0; startRow < 9; startRow += 3) {
    for (let startCol = 0; startCol < 9; startCol += 3) {
      let subgrid = [];
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          subgrid.push(board[i][j]);
        }
      }
      if (hasDuplicates(subgrid)) {
        return false;
      }
    }
  }
  return true;
}

let board1 = [
  ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

let board2 = [
  ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

let ans1 = isValidSudoku(board1);
let ans2 = isValidSudoku(board2);
console.log(ans1);
console.log(ans2);
