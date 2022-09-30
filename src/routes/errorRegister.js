import { Router } from "express"
import getErrorRegister from "../controllers/errorRegister"

const router = Router()

router.get("/", getErrorRegister)

export default router