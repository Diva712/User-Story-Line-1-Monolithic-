import { Router } from "express";
import { createSalesRepresentative } from "../controllers/salesRepresentative.controller.js";

const router = Router();


router.route("/").post(createSalesRepresentative)


export default router;