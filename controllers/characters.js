import Character from "../models/characters.js";

export const getCharacters = async (request, response) => {
  try {
    const characters = await Character.find();
    response.json(characters);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getCharacterByName = async (request, response) => {
  try {
    const { name } = request.params;
    const character = await Character.findOne({ name: name });

    if (character) {
      return response.json(character);
    }

    response.status(404).json({ message: "Character not found!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getCharacter = async (request, response) => {
  try {
    const { id } = request.params;
    const character = await Character.findById(id);

    if (character) {
      return response.json(character);
    }

    response.status(404).json({ message: "Character not found!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const createCharacter = async (request, response) => {
  try {
    const character = new Character(request.body);
    await character.save();
    response.status(201).json(character);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateCharacter = async (request, response) => {
  const { id } = request.params;
  const character = await Character.findByIdAndUpdate(id, request.body);
  response.status(200).json(character);
};

export const updateCharacterByName = async (request, response) => {
  const { name } = request.params;
  const character = await Character.findOneAndUpdate(name, request.body);
  response.status(200).json(character);
};

export const deleteCharacter = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Character.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Character deleted!");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteCharacterByName = async (request, response) => {
  try {
    const { name } = request.params;
    const deleted = await Character.findOneAndDelete(name);

    if (deleted) {
      return response.status(200).send("Character deleted!");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};
