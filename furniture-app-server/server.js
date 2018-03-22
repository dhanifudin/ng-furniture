'use strict'

require('module-alias/register')
require('dotenv').config()

const express = require('express')
const path = require('path')

const loginRoute = require('./routes/login')
const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const feedbackRoute = require('./routes/feedback')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/login', loginRoute)
app.use('/api/user', userRoute)
app.use('/api/category', categoryRoute)
app.use('/api/feedback', feedbackRoute)

app.use((req, res) => {
  res.status(404).json({ 'error': 'some error' })
})

const server = app.listen(process.env.PORT, () => {
  const port = server.address().port
  console.log('Web app hosted at http://localhost:%s', port)
})
