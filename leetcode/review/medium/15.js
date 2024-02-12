/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const triplets = []
  const seen = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = num + nums[left] + nums[right]
      const triplet = [num, nums[left], nums[right]]
      if (sum === 0 && !seen[triplet]) {
        triplets.push([num, nums[left], nums[right]])
        seen[triplet] = true
      }

      if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return triplets
}
