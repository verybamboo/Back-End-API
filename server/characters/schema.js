let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  name: String,
  vision: String,
  weapon: String,
  nation: String,
  rarity: Number,
  birthday: Date,
  affiliation: String,
  description: String
})

module.exports = schema