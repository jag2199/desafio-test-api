import os from "os"

const info = {
    "Node version": process.version,
    "Platform": process.platform,
    "Directorio de ejecución": process.cwd(),
    "ID del proceso": process.pid,
    "Uso de la memoria": process.memoryUsage(),
    "Memoria total reservada (rss)": process.memoryUsage().rss,
    "path de ejecución": process.execPath,
    "Argumentos de entrada": process.argv,
    "Numero de procesadores": os.cpus().length
}

const getInfo = (req, res) => {
    console.log(info)
    res.send(info)
}

export default getInfo