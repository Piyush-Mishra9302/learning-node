import express from "express";
import stuController from "../controllers/studentController.js";
const router = express.Router();

router.get("/getsessioninfo", stuController.get_session_info)
router.get("/deletesession", stuController.delete_session)

export default router;