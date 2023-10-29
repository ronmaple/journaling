import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/health', (req, res) => {
  res.send(`OK`)
})

app.listen(port, () => {
  console.log(`🚀 Typescript Starter Kit running on port:: ${port}`)
})