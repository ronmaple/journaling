// @medium
// Tricky but easy. Could be slightly cleaner, and maybe use eval()? 
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const numberStack = []
  const notations = new Set(['+', '-', '*', '/'])

  for (const token of tokens) {
    if (notations.has(token)) {
      const top = numberStack.pop()
      const second = numberStack.pop()
      let eval = null
      if (token === '+') {
        eval = second + top
      }
      if (token === '-') {
        eval = second - top
      }
      if (token === '/') {
        eval = Math.trunc(second / top)
      }
      if (token === '*') {
        eval = second * top
      }

      numberStack.push(eval)
    } else {
      numberStack.push(Number(token))
    }
  }
  return numberStack[0]
};