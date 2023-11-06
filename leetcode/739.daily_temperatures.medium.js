// @medium
// brute-forced. Obviously slow
// 7080ms, 65.76mb
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const days = []

  // brute-force:
  for (let i = 0; i < temperatures.length; i++) {
    let p = i + 1
    while (temperatures[p] <= temperatures[i] && p <= temperatures.length) {
      p++
    }
    if (temperatures[p] > temperatures[i]) {
      days.push(p - i)
    } else {
      days.push(0)
    }
  }

  return days
};

// watched a video to get the idea
// 208 ms, 65.66mb
// 1. monotonic decreasing stack (a stack that contains similar conditions -- ie they're all decreasing)
var dailyTemperatures = function(temperatures) {
  const days = Array(temperatures.length).fill(0)

  const stack = []
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const j = stack.pop()
      days[j] = i - j
    }
    stack.push(i)
  }

  return days
};