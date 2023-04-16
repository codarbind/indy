import { Router } from "express";
import { encoder } from "../controllers/encode.controller";


const router = Router()

router.post("/",encoder)


export = router