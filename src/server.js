import http from "http"

import _yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const yargs = _yargs(hideBin(process.argv))
const args = yargs
    .default({
        PORT: 8080,
        MODE: "FORK"
    })
    .argv


import { Server as ioServer } from "socket.io"
import MsjContainer from "./daos/msj.js"
import app from "./app.js"

import cluster from 'cluster'
import os from "os"

const numCPUs = os.cpus().length

// dotenv.config()

const MODE = args.MODE === "CLUSTER"

if (cluster.isMaster && MODE) {
    console.log(`Master (${process.pid}) is running...`);
    console.log(`Numero de procesadores: ${numCPUs}`)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork()
    })
} else {

    const httpServer = http.createServer(app)
    const io = new ioServer(httpServer)

    // io
    io.on("connection", (socket) => {
        console.log("conectado")
        // socket.emit("productos", container.getAll())

        // socket.on("newProd", (arg) => {
        //     console.log(arg)
        //     io.sockets.emit("productos", container.getAll())
        // })
        let msjDB = new MsjContainer()

        const msj = msjDB.getAll()

        socket.emit("chat", msj)

        socket.on("newMsj", newMsj => {
            msjDB.save(newMsj)
            io.sockets.emit("chat", msj)
        })
    })

    // server
    const server = httpServer.listen(args.PORT, () => {
        console.log(`Servidor iniciado en el puerto ${server.address().port} ( http://localhost:${server.address().port} ) PID: ${process.pid}`)
    })

    server.on("error", error => console.log(error))
}
    // hacer controllers y ver si hace falta algo mas