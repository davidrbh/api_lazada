import { Router } from "express";
import { fetchItemDetail } from "../controllers/lazadaController";

const router = Router();

router.get("/lazada/item-detail", fetchItemDetail);

export default router;
