// Easy
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i]
    if (hash[value] !== undefined) {
      return [i, hash[value]]
    }
    hash[nums[i]] = i
  }
  return []
};