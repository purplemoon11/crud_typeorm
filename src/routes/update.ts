import { Router } from "express";
import { Update } from "../controller/update";
const router = Router()

router.put('/update/:id', Update.updateData)

module.exports = router;