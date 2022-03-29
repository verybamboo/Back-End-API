let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  name: String,
  element: String
})

module.exports = schema