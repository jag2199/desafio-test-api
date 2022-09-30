import { Router } from "express"
import getApi from "../controllers/api"

const router = Router()

router.get("/", getApi)

export default router