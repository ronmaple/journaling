import express from 'express'
import mongoose from 'mongoose'
import healthRoute from './health/routes'
import tasksRoute from './tasks/routes'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', healthRoute)
app.use('/tasks', tasksRoute)

// TODO: winston or another logger
const server = async () => {
  try {
    await mongoose.connect('mongodb://root:example@127.0.0.1:27017')
    console.log(
      `📄 MongoDB connected on: ${
        process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'
      }`
    )
  } catch (err) {
    console.error('MongoDB connection failed')
    console.error(err)
    throw err
  }

  app.listen(port, () => {
    console.log(`🚀 Typescript Starter Kit running on port:: ${port}`)
  })
}

export { server }
