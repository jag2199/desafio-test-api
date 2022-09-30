import { Router } from "express"
import { getLogin, postLogin } from "../controllers/login"

const router = Router()

router.get("/", getLogin)

router.post("/", postLogin)

export default router