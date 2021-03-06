//set up all required files
import db from "../database/connection.js";
import Character from "../models/characters.js";
import characters from "./characters.json" assert { type: "json" };

const setUp = async () => {
  await db.dropDatabase();
  await Character.insertMany(characters);
  db.close();
};

setUp();
