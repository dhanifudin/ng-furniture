'use strict'

const express = require('express')
const router = express.Router()

const model = require('~/model/feedback')

router.get('/', (req, res) => {
  model.fetchAll()
    .then((result) => {
      res.json(result)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  model.where({ feedbackid: id })
    .fetch()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(404).json({ result: false })
    })
})

router.post('/', (req, res) => {
  const { name, email, message, gender } = req.body
  new model({ name, email, message, gender })
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
    })
})

module.exports = router
