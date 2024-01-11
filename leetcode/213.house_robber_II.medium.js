/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  // find the solutions for when we skip the first house
  // or when we skip the last house
  let slow = nums[0]
  let fast = Math.max(nums[0], nums[1])
  let max = fast

  for (let i = 2; i < nums.length - 1; i++) {
    max = Math.max(fast, slow + nums[i])
    slow = fast
    fast = max
  }

  slow = nums[1]
  fast = Math.max(nums[1], nums[2])
  let max2 = fast
  for (let i = 3; i < nums.length; i++) {
    max2 = Math.max(fast, slow + nums[i])
    slow = fast
    fast = max2
  }

  return Math.max(max, max2)
}
