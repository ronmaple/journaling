// https://www.hackerrank.com/challenges/the-birthday-bar/
// I misread this. It was easier than I thought. "contiguous"

function birthday(s, d, m) {
  let segments = 0
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0
    for (let j = i; j < i + m; j++) {
      sum += s[j]
    }
    if (sum === d) {
      segments++
    }
  }
  
  return segments
}
