// @medium
// I had a similar ideas but I needed hints
/**
 * @param {string} s
 * @return {number}
 */
// 1. store in a set
// 2. if a s[i] re-occurence is found:
//   slide the window to the right of the first occurence of s[i]
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0
  }

  let left = 0
  let set = new Set()
  let longest = 0

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left])
      left++
    }
    set.add(s[i])
    longest = Math.max(set.size, longest)
  }

  return longest
};