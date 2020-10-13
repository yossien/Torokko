import * as Express from "express"
import {logger} from "../middleware/logging";
import {sayHello} from "../service/helloService";

const helloRouter = Express.Router()

helloRouter.use((req, res, next) => {
  logger(req)
  next()
})

helloRouter.get('/', (req, res) => {
  sayHello(res)
})

export default helloRouter
