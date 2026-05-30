import express from "express";

import authMiddleware from "../middlewares/auth.middleware.js";

import {
  saveComparisonHandler,
  getComparisonsHandler,
  deleteComparisonHandler,
} from "../controllers/comparison.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
  "/",
  getComparisonsHandler
);

router.post(
  "/",
  saveComparisonHandler
);

router.delete(
  "/:id",
  deleteComparisonHandler
);

export default router;