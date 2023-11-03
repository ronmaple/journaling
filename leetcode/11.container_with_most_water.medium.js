// @medium
/**
 * @param {number[]} height
 * @return {number}
 */
// area = x * y
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    const y = Math.min(height[left], height[right])
    const x = right - left
    maxArea = Math.max(x*y, maxArea)
    
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
};