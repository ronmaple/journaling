// https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {
    // Problem statement description is confusing.
    // But essentially it's looking for common numbers that satisfies:
    // 1. multiples of a
    // 2. factors of b
    const getGCD = (a, b) => {
        if (b === 0) {
            return a
        }
        return getGCD(b, a % b)
    }
    
    let lcm = a[0]
    for (let i = 1; i < a.length; i++) {
        // LCD-GCD relation formula
        lcm = (a[i] * lcm) / getGCD(a[i], lcm)
    }
    
    let gcd = b[0]
    for (let i = 1; i < b.length; i++) {
        gcd = getGCD(gcd, b[i])
    }
    
    let n = 0
    let totalX = 0
    while (n < gcd) {
        n += lcm
        
        if (gcd % n === 0) {
            totalX++
        }
    }
    
    return totalX
}
