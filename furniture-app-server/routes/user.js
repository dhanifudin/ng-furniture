'use strict'

const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const model = require('~/model/user')

router.get('/', (req, res) => {
  model.fetchAll()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
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
  const { username, email, role, password } = req.body
  bcrypt.hash(password, 10)
    .then((hashPassword) => {
      new model({ username, email, role, password: hashPassword })
        .save()
        .then((result) => {
          res.json(result)
        })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
    })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { username, password } = req.body
  model.where({ userid: id })
    .save({ username, password }, { patch: true })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(404).json({ result: false })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  model.where({ userid: id })
    .destroy()
    .then((result) => {
      if (!result) {
        return res.status(500).json({ result: false })
      }
      res.json({ result: true })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(404).json({ result: false })
    })
})

module.exports = router
