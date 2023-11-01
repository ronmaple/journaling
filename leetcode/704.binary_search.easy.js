// @ easy
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = Math.round((right + left) / 2)

  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
};