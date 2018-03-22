'use strict'

const express = require('express')
const router = express.Router()

const controller = require('~/controller/feedback')

router.get('/', controller.getFeedbacks)
router.get('/', controller.getFeedback)
router.post('/', controller.createFeedback)

module.exports = router
