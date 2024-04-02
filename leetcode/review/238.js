/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/
// O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answers = Array(nums.length).fill(1)

  let leftProd = 1
  let rightProd = 1
  for (let i = 0; i < nums.length; i++) {
    let right = nums.length - 1 - i

    answers[i] *= leftProd
    answers[right] *= rightProd

    leftProd = nums[i] * leftProd
    rightProd = nums[right] * rightProd
  }

  return answers
}

/*
nums = [1,2,3,4]
1 -> 2 * 3 * 4 -> 24
2 -> 1 * 3 * 4 -> 12
3 -> 1 * 2 * 4 -> 8
4 -> 1 * 2 * 3 -> 6

O(n^2)
answers = [...nums]
for let i = 0; i < nums.length; i++:
  for let j = 0; j < nums.length; j++:
    if (i === j) {
      // skip
    } else {
      answers[i] *= nums[j]
    }


answers = Array(nums.length).fill(1)
leftProduct = 1
rightProduct = 1

for let i = 0; i < nums.length; i++
left = i
right = nums.length - 1 - i

answers[i] = leftProduct 
leftProduct *= nums[left]
rightProduct *= nums[right]


left  = 0 -> 1
right = 3 -> 4

left  = 1 -> 2
right = 2 -> 3

left  = 2 -> 3
right = 1 -> 2

left  = 3 -> 4
right = 0 -> 1

i -> 1, 2, 3, 4

1, 2, 3, 4 -> product from 0 -> n

1,2,3 <- 4  0 <- n
 
*/
