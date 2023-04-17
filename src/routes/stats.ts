import { Router } from "express";
import { stats_agg } from "../controllers/stats.controller";


const router = Router()

router.get("/:slug",stats_agg)


export = router