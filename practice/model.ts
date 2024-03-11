import uuid from 'uuid'

// First thought is that I want to create a 
// Food class where I'm storing Food fields
// and perhaps extend this OOP style for different food like
// Fruit extends Food
// Apple extends Fruit


// For the sake of my own experience, and simplicity
// I will go with a generic food approach -- NoSql style

let foodDatabase = []
// GET = for food in foodDatabase, match by ID
// POST = insert
// PUT = find by ID and update object
// DELETE = find by ID and remove from array

enum FoodType {
  MEAT = 'MEAT',
  FRUITS_AND_VEGETABLE = 'FRUITS_AND_VEGETABLES',
  LIQUIDS = 'LIQUID'
}
// Problem I'm thinking of is:
// same food inserted on different dates
// create a new food every time a new item gets inserted
type foodSchema = {
  id: string,

  // some sort of validation
  type: {
    // one of:
    enums: Object.keys(FoodType)
  },
  name: string, // Apple, orange

  shelfLife: number,
  storageDate: Date,

  createdAt: Date,
  updatedAt: Date
}


export {
  foodDatabase,
  foodSchema
}