'use strict'

const express = require('express')
const router = express.Router()

const controller = require('~/controller/user')

router.post('/', controller.loginUser)

module.exports = router
