// https://www.hackerrank.com/challenges/ctci-ransom-note
function checkMagazine(magazine, note) {
    const magazineMap = {} // { []: n }
    for (const word of magazine) {
      if (!magazineMap[word]) {
        magazineMap[word] = 1
      } else {
        magazineMap[word]++
      }
    }
    
    for (const word of note) {
      if (magazineMap[word]) {
        magazineMap[word]--
      } else {
        console.log("No")
        return
      }
    }
    console.log("Yes")
}
