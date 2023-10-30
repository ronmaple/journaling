// @easy
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const matchingPair = {
    "{":"}",
    "(":")",
    "[":"]"
  }
  const pairStack = []
  for (let i = 0; i < s.length; i++) {
    if (pairStack[pairStack.length-1] === s[i]) {
      pairStack.pop()
    } else {
      pairStack.push(matchingPair[s[i]])
    }
  }
  return pairStack.length === 0
};