'use strict'

const category = require('~/model/category')
const furniture = require('~/model/furniture')

const controller = {
  getCategories: (req, res) => {
    category.fetchAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err.message)
        res.status(500).json({ result: false })
      })
  },
  getFurnituresByCategory: (req, res) => {
    const { cat_id } = req.params
    furniture.where({ cat_id })
      .fetchAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err.message)
        res.status(500).json({ result: false })
      })
  },
  getDetailFurniture: (req, res) => {
    const { cat_id, it_id } = req.params
    furniture.where({ cat_id, it_id })
      .fetch()
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
