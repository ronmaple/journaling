/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  const table = Array(s.length + 1).fill(false)
  table[0] = true

  // expanding window-like search
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const window = s.slice(start, end)
      if (table[start] === true && wordSet.has(window)) {
        table[end] = true
        break
      }
    }
  }

  return table[s.length]
}
