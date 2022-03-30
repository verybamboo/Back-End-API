//set up all required files
import db from "../database/connection.js"
import Character from "../models/character.js"
import characters from "./characters.json" assert {type: "json"}

const setUp = async () => {
  db.dropDatabase()
  await Character.insertMany(characters)
  await Element.insertMany(houses)
  db.close()
}

setUp()
