import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class Update{
    static updateData = async (req: Request, res: Response) => {
        const id = req.params.id
        const updated = await AppDataSource.getRepository(User).findOneById(id);
        if(updated){
            AppDataSource.getRepository(User).merge(updated, req.body);
            const result = await AppDataSource.getRepository(User).save(updated)
            return res.json(result)
        }
        else{
            return res.json({message: "Data not found"})
        }
    }

}