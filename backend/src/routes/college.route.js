import express from "express";
import { getColleges, getCollegeById , compareColleges} from "../controllers/college.controller.js";

const router = express.Router();

router.get("/", getColleges);
router.get("/:id", getCollegeById);
router.get("/compare/list", compareColleges);

export default router;