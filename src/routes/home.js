import { Router } from "express"
import isAuth from "../middlewares/isAuth"
import { getHome, postHome, updateHome, deleteHome } from "../controllers/home"

const router = Router()

router.get("/", isAuth, getHome)

router.post("/", postHome)

router.put("/update", updateHome)

router.get("/delete", deleteHome)

export default router