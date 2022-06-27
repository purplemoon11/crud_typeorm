import { Router, Request, Response } from "express";
import { getData } from "../controller/retrive";
const router = Router()

router.get('/retrive', getData.retrive);
router.get('/retrive/:id', getData.retriveDataById)

module.exports = router