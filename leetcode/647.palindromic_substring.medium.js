/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = 0

  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i
    // expand at odd position
    while (right < s.length && left >= 0 && s[right] === s[left]) {
      res++
      left--
      right++
    }

    // expand at even
    left = i
    right = i + 1
    while (right < s.length && left >= 0 && s[right] === s[left]) {
      res++
      left--
      right++
    }
  }

  return res
}
