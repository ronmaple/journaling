// @medium
// O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const forward = Array(nums.length)
    .fill(nums[0])

  const backward = Array(nums.length)
    .fill(nums.at(-1))

  for (let i = 1; i < nums.length; i++) {
    const j = nums.length - 1 - i
    forward[i] = forward[i-1] * nums[i]
    backward[j] = backward[j+1] * nums[j]
  }

  const products = Array(nums.length).fill(1)
  products[0] = backward[1]
  products[nums.length-1] = forward[nums.length-2]

  for (let i = 1; i < nums.length - 1; i++) {
    products[i] = backward[i+1] * forward[i-1]
  }

  return products
};
