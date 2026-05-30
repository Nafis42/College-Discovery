import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import collegeRoutes from "./routes/college.route.js";
import authRoutes from "./routes/auth.routes.js";
import savedRoutes from "./routes/saved.routes.js";
import comparisonRoutes from "./routes/comparison.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running",
  });
});

app.get("/test-db", async (req, res) => {
    try {
      const result = await pool.query("SELECT NOW()");
  
      res.status(200).json({
        success: true,
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });

  app.use("/api/colleges", collegeRoutes);
  app.use(
    "/api/auth",
    authRoutes
  );
  app.use(
    "/api/saved",
    savedRoutes
  );

  app.use(
    "/api/comparisons",
    comparisonRoutes
  );

export default app;