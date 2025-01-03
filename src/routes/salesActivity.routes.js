import { Router } from "express"
import { createSalesActivity, getSalesActivites } from "../controllers/salesActivity.controller.js";


const router = Router();


router.route("/")
  .post(createSalesActivity)
  .get(getSalesActivites)


export default router;