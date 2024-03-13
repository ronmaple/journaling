// script to find a random leetcode question from my existing completed topics
// for re-doing
const fs = require('fs')
const path = require('path')

fs.readdir('./leetcode', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }

  if (files.length === 0) {
    console.log('No files found in the directory.')
    return
  }

  const randomIndex = Math.floor(Math.random() * files.length)
  const randomFile = files[randomIndex]

  console.log('Randomly selected file:', randomFile)
})
