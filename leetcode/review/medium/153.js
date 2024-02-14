var findMin = function (nums) {
  let forward = 0
  let backward = nums.length - 1
  let mid = Math.floor((backward + forward) / 2)
  while (forward < backward) {
    mid = Math.floor((backward + forward) / 2)
    if (nums[mid] > nums[backward]) {
      forward = mid + 1
    } else {
      backward = mid
    }
  }

  return nums[mid]
}
