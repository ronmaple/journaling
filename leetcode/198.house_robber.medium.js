/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const table = Array(nums.length - 1).fill(0)

  if (nums.length < 2) {
    return nums[0]
  }

  // base case
  table[0] = nums[0]
  table[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    table[i] = Math.max(table[i - 1], nums[i] + table[i - 2])
  }

  return Math.max(table[nums.length - 1], table[nums.length - 2])
}
