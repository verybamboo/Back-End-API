import Character from "../models/character.js";

export const getCharacters = async (request, response) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCharacter = async (request, response) => {
  try {
    const character = new Character(req.body);
    await character.save();
    response.status(201).json(character);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateCharacter = async (request, response) => {
  const { id } = req.params;
  const character = await Character.findByIdAndUpdate(id, req.body);
  res.status(200).json(character);
};

export const deleteCharacter = async (request, response) => {
  try {
    const { id } = req.params;
    const deleted = await Character.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character deleted!");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};