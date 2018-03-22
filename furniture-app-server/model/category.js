'use strict'

const bookshelf = require('~/bookshelf')

require('./furniture')

const Category = bookshelf.Model.extend({
  idAttribute: 'cat_id',
  tableName: 'category',

  furnitures: function () {
    return this.hasMany('Furniture', 'cat_id')
  }
})

module.exports = bookshelf.model('Category', Category)
