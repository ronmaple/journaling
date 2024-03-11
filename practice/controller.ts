import { foodDatabase, foodSchema } from "./model"
// I noticed that I've used up a lot of time
// I will add the business logic here for now
// and refactor this to its own file, time permitting
const getAll = () => {
  return foodDatabase
}

const get = (id) => {
  const food = foodDatabase.find((food) => {
    return food.id === id
  })
  if (!food) {
    throw new Error('Not Found', 404)
  }

  return food
}

const create = (body) => {
  try {
    if (!FoodType[body.type]) {
      throw new ValidationError('Invalid Food type')
    }
    // other to consider:
    // maybe we have a dictionary of all foods
    // maybe we want to limit length of name
    const food: foodSchema = {
      id: uuid(),
      type: body.type,
      name: body.name,
      shelfLife: body.shelfLife || 10,
      storageDate: Date.now(), // assume UNIX
      // assume createdAt, updatedAt auto-created
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    foodDatabase.push(food)
  } catch (error) {
    logger.error(error)
    throw new ServerError('Server Error 500')
  }

  return food
}

const update = (body) => {
  try {
    if (!FoodType[body.type]) {
      throw new ValidationError('Invalid Food type')
    }

    const foodIndex = foodDatabase.findIndex((food) => {
      return food.id = body.id
    })
    if (!foodIndex < 0) {
      throw new NotFoundError('Not found')
    }

    const updated = {
      ...foodDatabase[foodIndex],
      ...body
    }


    foodDatabase[foodIndex] = updated

    return updated
  } catch (error) {
    throw new ServerError()
  }
}

const deleteOne = (id) => {
    const foodIndex = foodDatabase.find((food) => {
      return food.id === id
    })
    // do we throw an error if food is already deleted?
    // I would argue that we don't
    // if (!food) {
    //   throw new Error('Not Found', 404)
    // }

    foodDatabase.splice(foodIndex, 1)


    return
}

// handling the cron trigger
// let's assume that there's something like a cloudwatch
// that handles the cron, runs once a day
// cron POST requests to our server
// server will handle the logic, and update the decrements

// Probably unit test this
// Probably also integration tests
// Either one sounds decent options
const processDailyDecrement = () => {
  // decrement all

  // we don't have to do it this way?
  // but maybe we don't wanna update this one by one
  // while let's say, some other process is going on?
  // one thing to consider is the mutability of the data...
  // so we'd probably want to lock the database
  // while this is going on...?

  // I don't know how to do that in memory javascript,
  // maybe we can consider Object.freeze, and if there's
  // Object.unfreeze?


  const copy = Object.structuredClone(foodDatabase)

  for (const food of copy) {
    food.shelfLife -= 1
  }

  foodDatabase = copy
}

export { get, getAll, create, update, deleteOne, processDailyDecrement }

// One thing that I have not touched on so far
// is testing. 
// I think it's appropriate now to.
// these are some basic API queries so far
// I would want to 