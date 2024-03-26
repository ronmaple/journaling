var maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        let minHeight = Math.min(height[left], height[right])
        let currentArea = minHeight * (right - left)
        maxArea = Math.max(currentArea, maxArea)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
};
