import pool from "../config/db.js";
import bcrypt from "bcrypt";

export const registerUser = async ({
  name,
  email,
  password,
}) => {
  const existingUser =
    await pool.query(
      `
      SELECT *
      FROM users
      WHERE email = $1
      `,
      [email]
    );

  if (existingUser.rows.length) {
    throw new Error(
      "Email already registered"
    );
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const result = await pool.query(
    `
    INSERT INTO users
    (
      name,
      email,
      password_hash
    )
    VALUES ($1,$2,$3)
    RETURNING
      id,
      name,
      email
    `,
    [
      name,
      email,
      hashedPassword,
    ]
  );

  return result.rows[0];
};

export const loginUser = async ({
  email,
  password,
}) => {
  const result = await pool.query(
    `
    SELECT *
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  if (!result.rows.length) {
    throw new Error(
      "Invalid credentials"
    );
  }

  const user = result.rows[0];

  const isMatch =
    await bcrypt.compare(
      password,
      user.password_hash
    );

  if (!isMatch) {
    throw new Error(
      "Invalid credentials"
    );
  }

  return user;
};

export const getCurrentUser =
  async (userId) => {
    const result =
      await pool.query(
        `
      SELECT
        id,
        name,
        email,
        created_at
      FROM users
      WHERE id = $1
      `,
        [userId]
      );

    return result.rows[0];
  };