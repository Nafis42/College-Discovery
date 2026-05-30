import express from "express";

import authMiddleware from "../middlewares/auth.middleware.js";

import {
  saveCollegeHandler,
  removeSavedCollegeHandler,
  getSavedCollegesHandler,
} from "../controllers/saved.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
  "/",
  getSavedCollegesHandler
);

router.post(
  "/:collegeId",
  saveCollegeHandler
);

router.delete(
  "/:collegeId",
  removeSavedCollegeHandler
);

export default router;