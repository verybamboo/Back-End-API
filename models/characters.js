import mongoose from "mongoose"

const Schema = mongoose.Schema

let Character = new Schema({
  name: { type: String },
  vision: { type: String },
  weapon: { type: String },
  nation: { type: String },
  affiliation: { type: String },
  constellation: { type: String },
  birthday: { type: Date },
  description: { type: String }
})

export default mongoose.model("characters", Character)