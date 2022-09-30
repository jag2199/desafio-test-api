import "dotenv/config"
const option = process.env.DB_CONNECTION;
import logger from "../../utils/loggers.js"
import UserContainer from "../daos/users.js"

let usersDao
switch (option) {
    case "mongoDB":
        usersDao = new UserContainer()
        break
    case "firebase":
        logger.info("firebaseDB active")
    case "SQL":
        logger.info("SQL active")
    default:
        usersDao = new UserContainer()
}

export default usersDao