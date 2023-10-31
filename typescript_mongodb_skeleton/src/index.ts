import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3000

app.get('/health', (req, res) => {
  res.send(`OK`)
})

mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
  console.log(`📄 MongoDB connected on: ${process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'}`)
}).catch(console.error)

app.listen(port, () => {
  console.log(`🚀 Typescript Starter Kit running on port:: ${port}`)
})