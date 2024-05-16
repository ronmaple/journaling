function countingValleys(steps, path) {
    // [DD UU UU DD]
    // 0 -> [-1, -2, -1, 0, 1, 2, 1, 0]
    // a valley = negative -> 0 && previous == negative
    // valley starts when previous == 0
    
    let elevation = 0
    let valleys = 0
    
    for (let i = 0; i < steps; i++) {
      const step = path[i]
      if (step === "D") {
        elevation--
      } else {
        elevation++
      }
      
      if (elevation === 0 && path[i] === "U") {
        valleys++
      }
    }
    
    return valleys
}

// https://www.hackerrank.com/challenges/counting-valleys/
