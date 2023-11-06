// @medium
// This was tricky. I don't think I would have been able to solve it (quickly)
// without ChatGPT pseudo code. but it makes sense after seeing it
// I'll re-visit this
var generateParenthesis = function(n) {
  const result = []
  const stack = []

  stack.push(["(", 1, 0])
  while (stack.length) {
    const top = stack.pop()
    const [str, open, close] = top

    if (str.length === (2*n)) {
      // 2 * n = open + close parentheses = n
      result.push(str)
    }
    else {
      if (open < n) {
        stack.push([str+"(", open + 1, close])
      }
      if (close < open) {
        stack.push([str+")", open, close + 1])
      }
    }
  }
  return result
};