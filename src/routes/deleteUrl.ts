import { Router } from "express";
import {delete_url} from "../controllers/delete.controller"


const router = Router()

router.delete("/:link",delete_url)


export = router