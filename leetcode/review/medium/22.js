/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const decisions = []
  const result = []

  decisions.push(['(', 1, 0])
  while (decisions.length) {
    const [str, openCount, closeCount] = decisions.pop()

    if (str.length === 2 * n) {
      result.push(str)
    } else {
      if (openCount < n) {
        const addOpening = [str + '(', openCount + 1, closeCount]
        decisions.push(addOpening)
      }
      if (openCount > closeCount) {
        const addClosing = [str + ')', openCount, closeCount + 1]
        decisions.push(addClosing)
      }
    }
  }
  return result
}
