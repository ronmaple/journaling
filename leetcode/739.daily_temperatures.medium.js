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