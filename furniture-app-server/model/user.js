'use strict'

const bookshelf = require('~/bookshelf')

const User = bookshelf.Model.extend({
  tableName: 'user',
})

module.exports = bookshelf.model('User', User)
