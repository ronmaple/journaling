// @easy
var lengthOfLastWord = function(s) {
  let len = 0
  let p = s.length - 1
  while (s[p] === " " && p >= 0) {
    p--
  }
  while (s[p] !== " " && p >= 0) {
    p--
    len++
  }

  return len
};