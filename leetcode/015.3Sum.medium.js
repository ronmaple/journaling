// @medium

// Attempt #1
// This took a few hours to work through. Definitely pretty bad, but I'll optimize it
// 698ms 63.26MB
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const triplets = []

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (nums[i] + nums[left] + nums[right] === 0) {
        const set = [nums[i], nums[left], nums[right]]
        if (!isDuplicate(triplets, set)) {
          triplets.push(set)
        }
      }
      if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return triplets
};

const isDuplicate = (triplets, set) => {
  for (const triplet of triplets) {
    if (triplet[0] === set[0] && triplet[1] === set[1] && triplet[2] === set[2]) {
      return true
    }
  }

  return false
}

// Attempt #2
// faster, but maybe could be a little faster
// 155ms 58.90MB
// can porbably add another while (left < right && nums[right] === nums[right + 1]) { right-- } to avoid duplicates
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const triplets = []
  if (nums.length < 3) {
    return triplets
  }
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]])
        left++
        // to avoid duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      }
      else if (sum > 0) {
        right--
      }
      else {
        left++
      }
    }

    // handle duplicates
    while (nums[i] === nums[i+1]) {
      i++
    }
  }

  return triplets
};