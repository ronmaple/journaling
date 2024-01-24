/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = Array(s.length + 1).fill(-1)

  const dfs = (i) => {
    if (s.length === i) {
      return 1
    }
    if (dp[i] !== -1) {
      return dp[i]
    }
    if (s[i] === '0') {
      return 0
    }
    // 2 decisions: single digit or 2 digits
    let res = dfs(i + 1)
    // is current digit + next digit between 1 to 26
    if (
      i + 1 < s.length &&
      (s[i] === '1' || (s[i] === '2' && '0123456'.includes(s[i + 1])))
    ) {
      res += dfs(i + 2)
    }
    dp[i] = res
    return res
  }

  return dfs(0)
}
