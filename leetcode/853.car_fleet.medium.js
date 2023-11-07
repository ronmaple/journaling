// @medium
// I needed help on this one, but came up with a different solution
// and I kinda like mine better

// the car closest to the target will dictate the time it takes to reach the target
// given that any followers are slower
var carFleet = function (target, position, speed) {
  const carTuples = []
  for (let i = 0; i < position.length; i++) {
    carTuples.push([position[i], speed[i]])
  }

  carTuples.sort((a, b) => a[0] - b[0])
  let numberOfFleets = 0
  while (carTuples.length) {
    const [p, s] = carTuples.pop()
    numberOfFleets++

    const leadTime = (target - p) / s
    while (carTuples.length && (target - carTuples.at(-1)[0]) / carTuples.at(-1)[1] <= leadTime) {
      carTuples.pop()
    }
  }

  return numberOfFleets
};
