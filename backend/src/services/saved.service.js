import pool from "../config/db.js";

export const saveCollege = async (
  userId,
  collegeId
) => {
  const result = await pool.query(
    `
    INSERT INTO saved_colleges
    (
      user_id,
      college_id
    )
    VALUES ($1,$2)
    ON CONFLICT
    (user_id, college_id)
    DO NOTHING
    RETURNING *
    `,
    [userId, collegeId]
  );

  return result.rows[0];
};

export const removeSavedCollege =
  async (
    userId,
    collegeId
  ) => {
    await pool.query(
      `
      DELETE FROM saved_colleges
      WHERE user_id = $1
      AND college_id = $2
      `,
      [userId, collegeId]
    );
  };

export const getSavedColleges =
  async (userId) => {
    const result =
      await pool.query(
        `
      SELECT
        colleges.*
      FROM saved_colleges

      JOIN colleges
      ON colleges.id =
      saved_colleges.college_id

      WHERE saved_colleges.user_id = $1

      ORDER BY
      saved_colleges.created_at DESC
      `,
        [userId]
      );

    return result.rows;
  };