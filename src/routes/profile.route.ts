import { Router } from "express"
import * as controller from "../controllers/profile.controller"
import { validate } from "../middlewares/validation.middleware"
import { createProfileSchema } from "../schemas/profile.schema"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(createProfileSchema),
    controller.create)
router.put("/:id",
    validate(createProfileSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router