// https://www.hackerrank.com/challenges/breaking-best-and-worst-records

function breakingRecords(scores) {
    // Write your code here
    let currentMin = scores[0]
    let currentMax = scores[0]
    let minBroken = 0
    let maxBroken = 0
    
    for (const score of scores) {
        if (score > currentMax) {
            currentMax = score
            maxBroken++
        }
        
        if (score < currentMin) {
            currentMin = score
            minBroken++
        }
    }
    return [maxBroken, minBroken]
}
