/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const seen = new Set()
  const hor = board[0].length
  const ver = board.length

  const dfs = (pos, x, y) => {
    if (pos === word.length) {
      return true
    }
    if (y < 0 || x < 0 || hor <= y || ver <= x || board[x][y] !== word[pos]) {
      return false
    }

    const key = `${x}-${y}`
    if (seen.has(key)) {
      return false
    }

    seen.add(key)
    const result =
      dfs(pos + 1, x + 1, y) ||
      dfs(pos + 1, x - 1, y) ||
      dfs(pos + 1, x, y + 1) ||
      dfs(pos + 1, x, y - 1)

    seen.delete(key)
    return result
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const found = dfs(0, i, j)
      if (found) {
        return true
      }
    }
  }

  return false
}
