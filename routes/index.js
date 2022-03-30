import { Router } from "express"
import characterRoutes from "./characters.js"

const router = Router()

router.get("/", (request, response) => response.send("ROOT API"))
router.use("/", characterRoutes)

export default router