// @medium
// I needed some clues
// I will improve this
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums)

  let longestSequence = 0
  let currentSequence = 0
  while (set.size) {
    let num = set.values().next().value
    currentSequence = 1
    set.delete(num)

    let upper = num + 1
    let lower = num - 1
  
    while (set.has(upper)) {
      currentSequence++
      set.delete(upper)
      upper = upper + 1
    }
    while (set.has(lower)) {
      currentSequence++
      set.delete(lower)
      lower = lower - 1
    }

    longestSequence = Math.max(currentSequence, longestSequence)
  }

  return longestSequence
};

// Attempt 2: 
// 1357ms 64.43MB
// worse performer. Probably because compared to #1, we're going through all of nums
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   const set = new Set(nums)
//   let longestSequence = 0
  
//   for (const num of nums) {
//     let length = 0
//     // we only check if there's lower number in the set
//     // ie - if it's the start of the sequence
//     if (!set.has(num - 1)) {
//       while (set.has(num + length)) {
//         length++ 
//       }
//     }
//     longestSequence = Math.max(longestSequence, length)
//   }

//   return longestSequence
// };