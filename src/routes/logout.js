import { Router } from "express"
import getLogout from "../controllers/logout"

const router = Router()

router.get("/", getLogout)

export default router