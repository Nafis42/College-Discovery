import pool from "../config/db.js";

export const fetchColleges = async (query) => {
  let {
    page = 1,
    limit = 10,
    search = "",
    location,
    type,
    sortBy,
    order = "desc",
  } = query;

  page = Number(page);
  limit = Number(limit);

  const offset = (page - 1) * limit;

  let sql = `
    SELECT *
    FROM colleges
    WHERE 1=1
  `;

  const values = [];
  let index = 1;

  // Search by college name
  if (search) {
    sql += `
      AND LOWER(name)
      LIKE LOWER($${index})
    `;

    values.push(`%${search}%`);
    index++;
  }

  // Filter by location
  if (location) {
    sql += `
      AND location = $${index}
    `;

    values.push(location);
    index++;
  }

  // Filter by college type
  if (type) {
    sql += `
      AND college_type = $${index}
    `;

    values.push(type);
    index++;
  }

  // Sorting
  const allowedSortFields = [
    "rating",
    "fees",
    "median_package",
    "placement_percentage",
  ];

  if (sortBy && allowedSortFields.includes(sortBy)) {
    sql += `
      ORDER BY ${sortBy}
      ${order === "asc" ? "ASC" : "DESC"}
    `;
  } else {
    sql += `
      ORDER BY rating DESC
    `;
  }

  // Pagination
  sql += `
    LIMIT $${index}
    OFFSET $${index + 1}
  `;

  values.push(limit);
  values.push(offset);

  const result = await pool.query(sql, values);

  return {
    page,
    limit,
    count: result.rowCount,
    colleges: result.rows,
  };
};

export const fetchCollegeById = async (id) => {
  const collegeResult = await pool.query(
    `
    SELECT *
    FROM colleges
    WHERE id = $1
    `,
    [id]
  );

  if (!collegeResult.rows.length) {
    return null;
  }

  const coursesResult = await pool.query(
    `
    SELECT *
    FROM courses
    WHERE college_id = $1
    ORDER BY median_package DESC
    `,
    [id]
  );

  const reviewsResult = await pool.query(
    `
    SELECT *
    FROM reviews
    WHERE college_id = $1
    ORDER BY rating DESC
    `,
    [id]
  );

  return {
    college: collegeResult.rows[0],
    courses: coursesResult.rows,
    reviews: reviewsResult.rows,
  };
};

export const compareCollegesService = async (
  ids
) => {
  const result = await pool.query(
    `
    SELECT *
    FROM colleges
    WHERE id = ANY($1)
    `,
    [ids]
  );

  return result.rows;
};