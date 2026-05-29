import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Ensure .env is read properly regardless of where the server is launched from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.error("❌ CRITICAL: DATABASE_URL is missing from process.env!");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;