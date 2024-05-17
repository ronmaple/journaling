//https://www.hackerrank.com/challenges/two-strings
function twoStrings(s1, s2) {
    const s1Set = new Set(s1.split(''))
    
    for (let i = 0; i < s2.length; i++) {
      if (s1Set.has(s2[i])) {
        return "YES"
      }
    }
    return "NO"
}
