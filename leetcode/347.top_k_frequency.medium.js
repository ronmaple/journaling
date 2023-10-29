// @medium
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const frequencies = {}

  for (const num of nums) {
    if (frequencies[num] !== undefined) {
      frequencies[num]++
    } else {
      frequencies[num] = 1
    }
  }

  const topFrequencies = Object
    .keys(frequencies)
    .sort((a, b) => frequencies[b] - frequencies[a])

  return topFrequencies.slice(0, k)
};