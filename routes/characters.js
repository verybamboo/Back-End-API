import { router } from "express"
import * as controllers from "../controllers/characters.js"

const router = Router();

router.get("/characters", controllers.getCharacters)
router.get("/characters/:id", controllers.getCharacters)
router.post("/characters", controllers.createChracter)
router.put("/characters/:id", controllers.updateCharacter)
router.delete("/characters/:id", controllers.deleteCharacter)

export default router