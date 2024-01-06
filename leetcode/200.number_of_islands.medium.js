/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0

  const dfs = (i, j) => {
    if (grid[i][j] === '0') {
      return
    }
    if (grid[i][j] === '1') {
      grid[i][j] = '0'
    }
    if (i < grid.length - 1) {
      dfs(i + 1, j)
    }
    if (i > 0 && i < grid.length) {
      dfs(i - 1, j)
    }
    if (j < grid[i].length - 1) {
      dfs(i, j + 1)
    }
    if (j > 0 && j < grid.length) {
      dfs(i, j - 1)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(i, j)
      }
    }
  }

  return count
}
