import "dotenv/config"
const option = process.env.DB_CONNECTION;
import logger from "../../utils/loggers.js"
import ProductosContainer from "../daos/productos.js"

let productsDao
switch (option) {
    case "mongoDB":
        productsDao = new ProductosContainer()
        break
    case "firebase":
        logger.info("firebaseDB active")
    case "SQL":
        logger.info("SQL active")
    default:
        productsDao = new ProductosContainer()
}

export default productsDao