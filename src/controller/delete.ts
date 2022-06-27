import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class Delete{
    static deleteData = async (req: Request, res: Response) => {
        const id = req.params.id;
        const deletedData = AppDataSource.getRepository(User).delete(id);
        res.status(200).send({message: 'Data deleted successfully!!!', data: deletedData})
    }
}