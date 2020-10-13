import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import helloRouter from "./router/hello";

// For API.
const server = express()
server.use(cors({origin: false}))
server.use('/hello', helloRouter)

exports.api = functions.https.onRequest(server)
