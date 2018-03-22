'use strict'

const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const model = require('~/model/user')

router.post('/', (req, res) => {
  const { username, password } = req.body
  model.where({ username }).fetch()
    .then((result) => {
      if (!result)
        return res.status(404).json({ result: false })
      const hashPassword = result.attributes.password
      bcrypt.compare(password, hashPassword)
        .then((result) => {
          if (!result)
            return res.status(401).json({ result })
          res.json({ result })
        })
        .catch((err) => {
          console.log(err.message)
          res.status(500).json({ result: false })
        })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
    })
})

module.exports = router

