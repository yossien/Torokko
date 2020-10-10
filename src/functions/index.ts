import * as functions from "firebase-functions"
import next from "next"

const dev = process.env.NODE_ENV !== 'production'
const distDir = "_next"

const app = next({dev, conf: {distDir}})

const handle = app.getRequestHandler()

const nextApp = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => {
    console.log(req.originalUrl)
    return handle(req, res)
  })
})

export default nextApp