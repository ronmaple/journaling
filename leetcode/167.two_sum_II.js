// @medium
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let slow = 0
  let fast = numbers.length - 1

  while (slow < fast) {
    const sum = numbers[slow] + numbers[fast]
    if (sum === target) {
      return [slow+1, fast+1]
    }
    if (sum > target) {
      fast--
    } else {
      slow++
    }
  }
  return []
};