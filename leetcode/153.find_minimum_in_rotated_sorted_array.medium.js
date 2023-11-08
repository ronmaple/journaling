// @medium
// kinda struggled with this
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let forward = 0
  let backward = nums.length - 1
  let mid = Math.floor((backward + forward)/2)

  while (forward < backward) {
    mid = Math.floor((backward + forward)/2)
    // mid > backward means the rotation is on the right
    // ie. [4,5,6,7,0,1,2], where nums[mid] = 7, nums[backward] = 2
    // nums[mid] > nums[backward] means that the smaller window
    // is on the right, so we move forward to mid + 1
    if (nums[mid] > nums[backward]) {
      forward = mid + 1
    } else {
      backward = mid
    }
  }

  return nums[forward]
};