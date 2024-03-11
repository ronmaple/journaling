import express from 'express'
import foodController from './controller'
const app = express()

// we can be flexible with the naming
// ideas are:
// items
// foods
// we can also think of just having "/"
// but there might be other operations here like getting system metrics, etc

// good practice to version it. 

// use v1 for the whole route.
// use the express subrouting
app.use('/v1')

// assume /v1/ -- can also do:
// get all foods
// filtering like get all apples:
// /foods?type=MEAT
app.get('/foods', foodController.getAll)
// get food by id
app.get('/foods/:id', foodController.get)

app.post('/foods', foodController.create)
app.put('/foods/:id', foodController.update)
app.delete('/foods/:id', foodController.deleteOne)

// cron trigger route, say a lambda, calls this route
// to update all our foods
// we would want to secure this with 
app.post('/foods/daily-trigger', foodController.processDailyDecrement)
// or if we want generic
// where payload = {action: 'DAILY_DECREMENT_FOODS'}
app.post('/triggers', triggerMapper, foodController.processDailyDecrement)

app.listen(port, () => {
  console.log('express')
})