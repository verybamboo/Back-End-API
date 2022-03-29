let mongoose = require('mongoose')
let schema = require('./schema')

let model = mongoose.model('Character', schema)

module.exports = model