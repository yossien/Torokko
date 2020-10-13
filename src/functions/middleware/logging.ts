import {Request} from "express"

export const logger = (req: Request) => {
  console.log(req.originalUrl)
}