// @medium
// I had this mostly correct
// but I missed checking explicitly that the target would be within
// the sorted window. ie nums[left] <= target && nums[mid] >= target
// to account for the edge case [3,1], [4,5,6,7,8,0,1,2] target = 8
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)

    if (nums[mid] === target) {
      return mid
    }
    // left is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] >= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // right is sorted
      if (nums[right] >= target && nums[mid] <= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
