'use strict'

const bcrypt = require('bcrypt')
const model = require('~/model/user')

const controller = {
  loginUser: (req, res) => {
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
  },
  getUsers: (req, res) => {
    model.fetchAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err.message)
        res.status(500).json({ result: false })
      })
  },
  getUser: (req, res) => {
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
  },
  updateUser: (req, res) => {
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
  },
  deleteUser: (req, res) => {
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
  }
}

module.exports = controller
