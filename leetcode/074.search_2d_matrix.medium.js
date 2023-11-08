// @medium
// relatively easy
// Runtime 45ms 88.64%
// Memory 41.70MB 81.04%

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 1. find row that contains row[m][0] < target < row[m][-1]
// 2. search row[m]

// O(log(m) + log(n)
var searchMatrix = function(matrix, target) {
  let forward = 0
  let backward = matrix.length - 1
  let m = 0
  let row = matrix[m]

  while (forward <= backward) {
    m = Math.floor((backward+forward)/2)
    row = matrix[m]

    if (row[0] === target || row.at(-1) === target) {
      return true
    }
    if (row[0] < target && row.at(-1) > target) {
      break
    } 
    if (row[0] > target) {
      backward = m - 1
    } else {
      forward = m + 1
    }
  }
  forward = 0
  backward = row.length - 1
  while (forward <= backward) {
    m = Math.floor((backward+forward)/2)
    const col = row[m]
    if (col === target) {
      return true
    }
    if (col > target) {
      backward = m - 1
    } else {
      forward = m + 1
    }
  }

  return false
};

// O(log(m * n))
var searchMatrix = function(matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let forward = 0
  let backward = (m*n) - 1
  
  while (forward <= backward) {
    // middle of the entire array
    const mid = Math.floor((backward+forward)/2)
    // middle of the row
    const col = matrix[Math.floor(mid / n)][mid % n]

    if (col === target) {
      return true
    }
    if (col < target) {
      forward = mid + 1
    } else {
      backward = mid - 1
    }
  }
  return false
};