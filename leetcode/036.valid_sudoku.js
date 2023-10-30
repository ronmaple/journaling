// @medium
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set()
    const colSet = new Set()
    const boxSet = new Set()

    for (let j = 0; j < 9; j++) {
      const rowCell = board[i][j]
      const colCell = board[j][i]
      // see explanation below
      const boxCell = board[3*Math.floor(i/3) +Math.floor(j/3)][3*(i%3) +(j%3)]

      if (rowCell !== '.') {
        if (rowSet.has(rowCell)) {
          return false
        } else {
          rowSet.add(rowCell)
        }
      }

      if (colCell !== '.') {
        if (colSet.has(colCell)) {
          return false
        } else {
          colSet.add(colCell)
        }
      }

      if (boxCell !== '.') {
        if (boxSet.has(boxCell)) {
          return false
        } else {
          boxSet.add(boxCell)
        }
      }
    }
  }

  return true
};

// rows = 3* Math.floor(i/3) + Math.floor(j/3)
// because 3 * Math.floor(i/3) + Math.floor(j/3), from 0-8, evals to: 0, 3, 6
// which is the sub box coordinate
// cols = 3 * i%3 + j%3
// because i%3, j%3 evals to 0,1,2,3,4,5,6,7,8,9
// and resets to 0 when i = 0,3,6 (meaning the end of the search for the subbox)


// i = 0
// j = 0 -> board[0][0]
// j = 1 -> board[0][1]
// j = 2 -> board[0][2]

// i = 1
// j = 0 -> board[0][3]
// j = 1 -> board[0][4]
// ...

// i = 3
// j = 0 -> board[3][0]
// j = 1 -> board[3][1]
// j = 2 -> board[3][2]