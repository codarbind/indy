import { Router } from "express";
import { decoder } from "../controllers/decode.controller";


const router = Router()

router.get("/:slug",decoder)


export = router