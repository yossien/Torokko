const admin = require('firebase-admin')
const {default: next} = require('next')
import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import helloRouter from "./router/hello";
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const distDir = dev ? './dist/functions/.next/server' : `${path.relative(process.cwd(), __dirname)}/dist/functions/.next`

// For SSR.
admin.initializeApp()
const app = next({dev, const: {distDir}})
const handle = app.getRequestHandler()

exports.nextApp = functions.https.onRequest(async (req, res) => {
  await app.prepare()
  handle(req, res)
})

// For API.
const apiServer = express()
apiServer.use(cors({origin: false}))
apiServer.use('/hello', helloRouter)

exports.api = functions.https.onRequest(apiServer)
