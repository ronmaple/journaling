/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let totalLongest = s[0]

  const expandingWindow = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i--
      j++
    }

    return str.substring(i + 1, j)
  }

  for (let i = 0; i < s.length; i++) {
    const single = expandingWindow(s, i, i)
    const adj = expandingWindow(s, i, i + 1)
    let subLongest = adj
    if (single.length > subLongest.length) {
      subLongest = single
    }

    if (subLongest.length > totalLongest.length) {
      totalLongest = subLongest
    }
  }

  return totalLongest
}
