import { Router } from "express";
import * as controllers from "../controllers/characters.js";

const router = Router();

router.get("/characters", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacter);
router.get("/characters/name/:name", controllers.getCharacterByName);
router.post("/characters", controllers.createCharacter);
router.put("/characters/:id", controllers.updateCharacter);
router.put("/characters/name/:name", controllers.updateCharacterByName);
router.delete("/characters/:id", controllers.deleteCharacter);
router.delete("/characters/name/:name", controllers.deleteCharacterByName);

export default router;
