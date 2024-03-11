
import { foodDatabase } from "../model"
describe('Food API V1', () => {

  before(() => {
    // clear database
    foodDatabase = []
  })

  // I'm not gonna do all of it, for time
  // but I'll do PUT as an example, since
  // that covers a lot
  it('should get a list of foods on GET /foods')

  it('should get a single food on GET /foods/:id')

  it('should create food on POST /foods/:id')

  it('should update a food on PUT /foods/:id', async () => {

    // create food
    let response = await axios.post('/foods', headers, {
      type: 'MEAT',
      shelfLife: 10,
      name: 'Raw tenderloin'
    })
    expect(response.data.type).toEqual('MEAT')
    expect(response.status.code).toEqual(201)
    // we can either call POST or directly call the "DB"
    // I like calling POST, as it also tests POST

    // update a field
    const updated  = {
      ...food,
      name: 'Cooked tenderloin'
    }
    expect(response.data.type).toEqual('MEAT')
    expect(response.status.code).toEqual(202)
    expect(response.data.name).toEqual('Cooked tenderloin')
  })

  it('should delete a food on PUT /foods/:id')
})