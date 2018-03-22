'use strict'

const express = require('express')
const router = express.Router()

const Category = require('~/model/category')
const Furniture = require('~/model/furniture')

router.get('/', (req, res) => {
  Category.fetchAll()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
    })
})

router.get('/:cat_id/furniture', (req, res) => {
  const { cat_id } = req.params
  Category.where({ cat_id })
    .fetch({ withRelated: ['furnitures'] })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
    })
})

router.get('/:cat_id/furniture/:it_id', (req, res) => {
  const { cat_id, it_id } = req.params
  Furniture.where({ cat_id, it_id })
    .fetch()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ result: false })
    })
})

module.exports = router
