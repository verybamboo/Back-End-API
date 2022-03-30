import mongoose from "mongoose"

const Schema = mongoose.Schema

let Element = new Schema({
  vision: { type: String },
  users: [{ type: Object }]
})

export default mongoose.model("elements", Element)