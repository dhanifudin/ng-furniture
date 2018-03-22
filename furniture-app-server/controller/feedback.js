'use strict'

const model = require('~/model/feedback')

const controller = {
  getFeedbacks: (req, res) => {
    model.fetchAll()
      .then((result) => {
        res.json(result)
      })
  },
  getFeedback: (req, res) => {
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
  createFeedback: (req, res) => {
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
  }
}

module.exports = controller
