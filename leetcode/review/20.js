var isValid = function (s) {
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let i = 0; i < s.length; i++) {
    const parentheses = s[i]
    if (map[parentheses]) {
      const topOfStack = stack.pop()
      if (topOfStack !== map[parentheses]) {
        return false
      }
    } else {
      stack.push(parentheses)
    }
  }

  return stack.length === 0
}
