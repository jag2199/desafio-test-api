import { Router } from "express"
import compression from "compression"
import getInfo from "../controllers/info"

const router = Router()

router.get("/zip", compression(), getInfo)

router.get("/", getInfo)

export default router