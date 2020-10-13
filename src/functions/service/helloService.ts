import {Response} from "express";

export function sayHello(res: Response) {
  res.json({message: 'hello!!'})
}