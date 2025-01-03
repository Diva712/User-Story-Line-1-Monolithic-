import { Router } from "express"
import { creatSalesTarget, getSalesTargets, updateSalesTarget } from "../controllers/salesTarget.controller.js";


const router = Router();


router.route("/:id")
  .put(updateSalesTarget)
router.route("/")
  .post(creatSalesTarget)
  .get(getSalesTargets)



export default router;