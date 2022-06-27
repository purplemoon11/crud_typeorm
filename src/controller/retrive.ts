import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export class getData{
    static retrive = async (req: Request, res: Response) => {
        const get = await AppDataSource.getRepository(User).find()
        res.status(200).send(get)
        console.log(get)
    }

    static retriveDataById = async (req: Request, res: Response) =>{
        const id = req.params.id
        const result = await AppDataSource.getRepository(User).findOneById(id)
        res.status(200).send(result)
        console.log(result)
    }

}