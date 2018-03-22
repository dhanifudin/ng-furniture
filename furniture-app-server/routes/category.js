'use strict'

const express = require('express')
const router = express.Router()

const category = require('~/controller/category')

router.get('/', category.getCategories)
router.get('/:cat_id/furniture', category.getFurnituresByCategory)
router.get('/:cat_id/furniture/:it_id', category.getDetailFurniture)

module.exports = router
