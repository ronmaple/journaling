// @medium
// I used  a "secondSlow" variable just to emphasize that they're both slow pointers
// trying to meet at the intersection (start of the cycle)
// but fast and slow are the same speed, so they'll meet at the same time anyway
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0
  // find the first intersection
  do {
    // do-while because slow === fast at first iteration
    slow = nums[slow]
    fast = nums[nums[fast]] // two nodes faster
  } while (slow !== fast)

  // find the second intersection
  // the second intersection is the duplicate
  let secondSlow = 0
  while (slow !== secondSlow) {
    secondSlow = nums[secondSlow]
    slow = nums[slow]
  }

  return slow
}
