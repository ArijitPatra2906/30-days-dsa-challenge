// Day 29 - LeetCode 36: Valid Sudoku
// Check if a given 9x9 Sudoku board is valid
// Approach: HashSets for rows, columns, and 3x3 boxes
// Time: O(1), Space: O(1) — fixed board size

function isValidSudoku(board) {
  let rows = Array(9)
    .fill()
    .map(() => new Set())
  let cols = Array(9)
    .fill()
    .map(() => new Set())
  let boxes = Array(9)
    .fill()
    .map(() => new Set())

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j]

      if (val === '.') continue

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
        return false
      }

      rows[i].add(val)
      cols[j].add(val)
      boxes[boxIndex].add(val)
    }
  }

  return true
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board)) // Output: true
