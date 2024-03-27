var moveZeroes = function (nums) {
    let removed = 0
    let i = 0
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            removed++
        } else {
            i++
        }
    }
    for (let n = 0; n < removed; n++) {
        nums.push(0)
    }
    return nums
};

// better solution is to use 2 pointers
// 1 while loop, remove and push to the ned
// 1 pointer keeps track of the relative order
// 1 pointer to keep track fo the zeros
