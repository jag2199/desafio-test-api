import { Router } from "express"
import getErrorLogin from "../controllers/errorLogin"

const router = Router()

router.get("/", getErrorLogin)

export default router