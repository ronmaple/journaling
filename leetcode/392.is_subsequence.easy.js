// @easy
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let queue = s.split('')
  let i = 0;
  while (queue.length && i < t.length) {
    if (queue[0] === t[i]) {
      queue.shift()
    }
    i++
  }
  return queue.length === 0
};