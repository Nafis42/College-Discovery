import pool from "../config/db.js";

export const saveComparison = async (
  userId,
  name,
  collegeIds
) => {
  const result = await pool.query(
    `
    INSERT INTO saved_comparisons
    (
      user_id,
      name,
      college_ids
    )
    VALUES ($1,$2,$3)
    RETURNING *
    `,
    [
      userId,
      name,
      collegeIds,
    ]
  );

  return result.rows[0];
};

export const getComparisons =
  async (userId) => {
    const result =
      await pool.query(
        `
      SELECT *
      FROM saved_comparisons
      WHERE user_id = $1
      ORDER BY created_at DESC
      `,
        [userId]
      );

    return result.rows;
  };

export const deleteComparison =
  async (
    userId,
    comparisonId
  ) => {
    await pool.query(
      `
      DELETE FROM saved_comparisons
      WHERE id = $1
      AND user_id = $2
      `,
      [
        comparisonId,
        userId,
      ]
    );
  };