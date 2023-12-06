// @easy
// re-done on Dec 6, 2023 - to use character frequencies
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const frequencies = {}
  for (const char of s) {
    frequencies[char] = (frequencies[char] || 0) + 1
  }

  for (const char of t) {
    if (!frequencies[char]) {
      return false
    }
    frequencies[char]--
  }

  return true
};