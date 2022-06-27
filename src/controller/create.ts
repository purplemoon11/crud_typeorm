import {Request, Response} from 'express'
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export class create{
    static makeData = async (req: Request, res: Response) => {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }
        const result = await AppDataSource.getRepository(User).save(data)
        res.status(200).send(result)
        console.log(result)
    }
}