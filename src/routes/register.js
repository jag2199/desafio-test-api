import { Router } from "express"
import { getRegister, postRegister } from "../controllers/register"

const router = Router()

router.get("/", getRegister)

router.post("/", postRegister)

export default router