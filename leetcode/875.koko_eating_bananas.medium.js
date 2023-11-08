// @medium
// needed some hints
var minEatingSpeed = function(piles, h) {
  piles.sort((a, b) => a - b)
  let forward = 1
  let backward = piles[piles.length - 1]
  let k = Math.floor((backward + forward)/2)

  while (forward <= backward) {
    k = Math.floor((backward + forward)/2)
    let total = 0

    for (const pile of piles) {
      total += Math.ceil(pile / k)
    }

    if (total <= h) {
      backward = k - 1
    } else {
      forward = k + 1
    }
  }
  
  return forward
};