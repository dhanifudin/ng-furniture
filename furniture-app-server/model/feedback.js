'use strict'

const bookshelf = require('~/bookshelf')

const Feedback = bookshelf.Model.extend({
  tableName: 'feedback',
})

module.exports = bookshelf.model('Feedback', Feedback)
