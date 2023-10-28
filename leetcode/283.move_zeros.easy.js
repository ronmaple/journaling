/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0
  let j = 0
  // two pointers
  // j = track non-zero position
  // because we're going to modify the relative order
  // of the numbers in the array
  // i = track overall position
  while (i < nums.length) {
    if (nums[j] === 0) {
      nums.splice(j, 1)
      nums.push(0)
    } else {
      j++
    }

    i++
  }
};