let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  name: String,
  vision: String,
  weapon: String,
  nation: String,
  affiliation: String,
  rarity: Number,
  constellation: String,
  birthday: Date,
  description: String
})

module.exports = schema