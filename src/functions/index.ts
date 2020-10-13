import * as functions from "firebase-functions"
// import next from "next"
import express from "express"
import cors from "cors"
import helloRouter from "./router/hello";

// const dev = process.env.NODE_ENV !== 'production'

// const app = next({dev})

// const handle = app.getRequestHandler()

// For Page Host.(SSR)
/*
export const nextApp = functions.https.onRequest(async (req, res) => {
  await app.prepare()
  return handle(req, res)
})
*/

// For API.
const server = express()
server.use(cors({origin: false}))
server.use('/hello', helloRouter)

exports.api = functions.https.onRequest(server)
