var numIslands = function(grid) {
  let count = 0
  const dfs = (m, n) => {
    if (grid[m][n] === '0') {
      return
    }

    grid[m][n] = '0'

    if (m > 0) {
      dfs(m-1, n)
    }
    if (m < grid.length - 1) {
      dfs(m+1, n)
    }
    if (n > 0) {
      dfs(m, n-1)
    }
    if (n < grid[m].length - 1){
      dfs(m, n+1)
    }
  }

  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      if (grid[m][n] === '1') {
        dfs(m, n)
        count++
      }
    }
  }
  return count;
};
