// @easy
// left my notes on the bottom
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const steps = Array(n).fill(1)

  steps[0] = 1
  steps[1] = 2

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2]
  }
  return steps[n-1]
};

/**
n = 3

n = 1
1. 1 step

n = 2
1. 1 step + 1 step
2. 2 steps

n = 3
1. 1 step + 1 step + 1 step (n)
2. 1 step + 2 steps 
3. 2 steps + 1 step

n = 4
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 1 step + 2 steps
3. 1 step + 2 steps + 1 step
4. 2 steps + 1 step + 1 step
5. 2 steps + 2 steps

n = 5
1. 1 step + 1 step + 1 step + 1 step + step
2. 1 step + 1 step + 1 step + 2 steps
3. 1 step + + 1 step + 2 steps + 1 step
4. 1 step + 2 steps + 1 step + 1 step
5. 2 step + 1 steps + 1 step + 1 step
6. 1 step + 2 steps + 2 steps
7. 2 steps + 1 step + 2 steps 
8. 2 steps + 2 steps + 1 step
 */