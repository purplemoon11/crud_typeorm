import { Router } from "express";
import { Delete } from "../controller/delete";
const router = Router()

router.delete('/delete/:id', Delete.deleteData)

module.exports = router