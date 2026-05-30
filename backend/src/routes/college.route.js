import express from "express";
import { getColleges, getCollegeById , compareColleges, getCollegeMeta} from "../controllers/college.controller.js";

const router = express.Router();

router.get("/", getColleges);
// router.get("/:id", getCollegeById);
// router.get("/compare/list", compareColleges);
router.get(
    "/compare/list",
    compareColleges
  );
  router.get("/meta", getCollegeMeta);  
  router.get(
    "/:id",
    getCollegeById
  );
// router.get("/meta", getCollegeMeta);
export default router;