import { Router } from "express"
import { createSalesOpportunity, updateSalesOpportunity } from "../controllers/salesOpportunity.controller.js";


const router = Router();

router.route("/:id").put(updateSalesOpportunity)
router.route("/").post(createSalesOpportunity)


export default router;