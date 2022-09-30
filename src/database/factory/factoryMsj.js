import "dotenv/config"
const option = process.env.DB_CONNECTION;
import logger from "../../utils/loggers.js"
import MsjContainer from "../daos/msj.js"

let msjDao
switch (option) {
    case "mongoDB":
        msjDao = new MsjContainer()
        break
    case "firebase":
        logger.info("firebaseDB active")
    case "SQL":
        logger.info("SQL active")
    default:
        msjDao = new MsjContainer()
}

export default msjDao