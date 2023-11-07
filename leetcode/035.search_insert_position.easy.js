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
// binary search O(log n)
var searchInsert = function(nums, target) {
  let forward = 0
  let backward = nums.length - 1
  let mid = Math.floor((backward + forward) / 2)
  // to handle scenario where target is not in array...
  // where we allow forward and backward to overlap
  // to be able to update mid to a value closer to the target
  while (forward <= backward) { 
    mid = Math.floor((backward + forward) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      forward = mid + 1
    } else {
      backward = mid - 1
    }
  }
  if (nums[mid] < target) {
    mid = mid + 1
  }
  return mid
};