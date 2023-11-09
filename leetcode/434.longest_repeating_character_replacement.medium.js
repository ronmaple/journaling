// @medium
// Needed help. There's a faster solution but this makes sense to me more
var characterReplacement = function (s, k) {
  let left = 0
  let right = 0
  let res = 0
  const letters = {}

  while (right < s.length) {
    if (letters[s[right]]) {
      letters[s[right]]++
    } else {
      letters[s[right]] = 1
    }

    const max = Math.max(...Object.values(letters))

    if (right - left + 1 - max > k) {
      letters[s[left]]-- // max would reflect on the highest count
      left++
    }
    // window size is updated if the above condition shifts left pointer
    res = Math.max(right - left + 1, res)
    right++
  }

  return res
};