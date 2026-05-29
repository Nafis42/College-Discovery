import pool from "../src/config/db.js";
import {
  reviewers,
  reviewTexts,
} from "./data/reviews.js";

const getRandomItem = (arr) => {
  return arr[
    Math.floor(Math.random() * arr.length)
  ];
};

const getRandomYear = () => {
  return 2021 + Math.floor(Math.random() * 4);
};

const generateReviewRating = (collegeRating) => {
  const rounded = Math.round(collegeRating);

  const min = Math.max(3, rounded - 1);
  const max = Math.min(5, rounded);

  return (
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min
  );
};

const seedReviews = async () => {
  try {
    console.log("🚀 Seeding reviews...");

    await pool.query(`
      TRUNCATE TABLE reviews
      RESTART IDENTITY CASCADE
    `);

    const collegesResult = await pool.query(`
      SELECT id, rating
      FROM colleges
    `);

    const colleges = collegesResult.rows;

    for (const college of colleges) {
      for (let i = 0; i < 4; i++) {
        const reviewer =
          getRandomItem(reviewers);

        const reviewText =
          getRandomItem(reviewTexts);

        const rating =
          generateReviewRating(
            Number(college.rating)
          );

        const graduationYear =
          getRandomYear();

        await pool.query(
          `
          INSERT INTO reviews (
            college_id,
            reviewer_name,
            graduation_year,
            rating,
            review_text
          )
          VALUES ($1,$2,$3,$4,$5)
          `,
          [
            college.id,
            reviewer,
            graduationYear,
            rating,
            reviewText,
          ]
        );
      }
    }

    const reviewCount = await pool.query(`
      SELECT COUNT(*) FROM reviews
    `);

    console.log(
      `✅ Reviews seeded successfully`
    );

    console.log(
      `📊 Total Reviews: ${reviewCount.rows[0].count}`
    );

    process.exit(0);

  } catch (error) {
    console.error(
      "❌ Error seeding reviews:",
      error
    );

    process.exit(1);
  }
};

seedReviews();