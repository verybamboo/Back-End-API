let mongoose = require('mongoose')
let schema = require('./schema')

let model = mongoose.model('Elements', schema)

module.exports = model