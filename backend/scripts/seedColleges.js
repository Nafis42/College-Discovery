import pool from "../src/config/db.js";
import { colleges } from "./data/colleges.js";

const seedColleges = async () => {
  try {

    console.log("🚀 Starting college seeding...");

    await pool.query(`
      TRUNCATE TABLE colleges
      RESTART IDENTITY CASCADE
    `);

    console.log("🗑 Existing colleges removed");

    for (const college of colleges) {
      await pool.query(
        `
        INSERT INTO colleges (
          name,
          college_type,
          location,
          fees,
          rating,
          description,
          placement_percentage,
          median_package,
          highest_package
        )
        VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9
        )
        `,
        [
          college.name,
          college.college_type,
          college.location,
          college.fees,
          college.rating,
          college.description,
          college.placement_percentage,
          college.median_package,
          college.highest_package,
        ]
      );
    }

    console.log(
      `✅ ${colleges.length} colleges seeded successfully`
    );

    process.exit(0);

  } catch (error) {

    console.error(
      "❌ Error seeding colleges:",
      error
    );

    process.exit(1);
  }
};

seedColleges();