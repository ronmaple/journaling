/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums[0]
  let localMin = 1
  let localMax = 1

  for (let i = 0; i < nums.length; i++) {
    let currentMax = localMax
    localMax = Math.max(nums[i], localMax * nums[i], localMin * nums[i])
    localMin = Math.min(nums[i], localMin * nums[i], currentMax * nums[i])

    result = Math.max(localMax, result)
    if (nums[i] === 0) {
      localMax = 1
      localMin = 1
    }
  }
  return result
}
