// @easy
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// brute force O(n)
var searchInsert = function(nums, target) {
  let closestIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }
    if (Math.abs(target - nums[closestIndex]) >= Math.abs(target - nums[i])) {
      if (nums[i] < target) {
        closestIndex = i + 1
      } else {
        closestIndex = i
      }
    }
  }
  return closestIndex
};