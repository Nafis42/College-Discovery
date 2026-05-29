import pool from "../src/config/db.js";
import { courseTemplates } from "./data/courses.js";

const seedCourses = async () => {
  try {
    console.log("🚀 Seeding courses...");

    await pool.query(
      "TRUNCATE TABLE courses RESTART IDENTITY CASCADE"
    );

    const collegesResult = await pool.query(
      "SELECT * FROM colleges"
    );

    const colleges = collegesResult.rows;

    for (const college of colleges) {
      for (const course of courseTemplates) {
        const fees = Math.floor(
          college.fees * course.feesMultiplier
        );

        const placement = Math.min(
          100,
          college.placement_percentage +
            course.placementBoost
        );

        const medianPackage =
          college.median_package +
          course.packageBoost;

        await pool.query(
          `
          INSERT INTO courses (
            college_id,
            course_name,
            duration,
            fees,
            placement_percentage,
            median_package
          )
          VALUES ($1,$2,$3,$4,$5,$6)
          `,
          [
            college.id,
            course.course_name,
            course.duration,
            fees,
            placement,
            medianPackage,
          ]
        );
      }
    }

    console.log(
      `✅ Courses seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedCourses();