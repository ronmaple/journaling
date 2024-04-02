/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // frequencies { [num]: frequency }
  const frequencies = {}

  const numKeys = []
  // loop and count frequency of num
  for (const num of nums) {
    if (frequencies[num]) {
      frequencies[num]++
    } else {
      frequencies[num] = 1
      numKeys.push(num)
    }
  }

  // sort frequency hash by frequency

  numKeys.sort((a, b) => {
    return frequencies[b] - frequencies[a]
  })

  // splice idx 0 to k - 1
  return numKeys.splice(0, k)
};

// past solution:
// basically the same thing
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
