import express from "express"
import { handleGetAllReports } from "../controllers/reports-controller.js";
const router = express.Router();

router.get('/', handleGetAllReports);

export default router;