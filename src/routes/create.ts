import { Router, Request, Response } from "express";
import { create } from "../controller/create";
const router = Router()

router.post('/create', create.makeData);

module.exports = router