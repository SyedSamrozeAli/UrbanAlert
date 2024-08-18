import express from "express"
import { handleGetAllReports, handleGetLatestReports, handleGetMostVotedReports } from "../controllers/reports-controller.js";
const router = express.Router();

router.get('/', handleGetAllReports);
router.get('/latest-reports', handleGetLatestReports);
router.get('/most-voted-reports', handleGetMostVotedReports);

export default router;