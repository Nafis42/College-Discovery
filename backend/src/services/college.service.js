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

  let baseQuery = `
    FROM colleges
    WHERE 1=1
  `;

  const values = [];
  let index = 1;

  // Search
  if (search) {
    baseQuery += `
      AND LOWER(name)
      LIKE LOWER($${index})
    `;

    values.push(`%${search}%`);
    index++;
  }

  // Location Filter
  if (location) {
    baseQuery += `
      AND location = $${index}
    `;

    values.push(location);
    index++;
  }

  // College Type Filter
  if (type) {
    baseQuery += `
      AND college_type = $${index}
    `;

    values.push(type);
    index++;
  }

  // Total Count Query
  const countResult = await pool.query(
    `
    SELECT COUNT(*) ${baseQuery}
    `,
    values
  );

  const total = Number(
    countResult.rows[0].count
  );

  // Main Data Query
  let dataQuery = `
    SELECT *
    ${baseQuery}
  `;

  // Sorting
  const allowedSortFields = [
    "rating",
    "fees",
    "median_package",
    "placement_percentage",
  ];

  if (
    sortBy &&
    allowedSortFields.includes(sortBy)
  ) {
    dataQuery += `
      ORDER BY ${sortBy}
      ${order === "asc" ? "ASC" : "DESC"}
    `;
  } else {
    dataQuery += `
      ORDER BY rating DESC
    `;
  }

  // Pagination
  dataQuery += `
    LIMIT $${index}
    OFFSET $${index + 1}
  `;

  const dataValues = [
    ...values,
    limit,
    offset,
  ];

  const result = await pool.query(
    dataQuery,
    dataValues
  );

  return {
    page,
    limit,
    total,

    totalPages: Math.ceil(
      total / limit
    ),

    colleges: result.rows,
  };
};

export const fetchCollegeById = async (
  id
) => {
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

export const compareCollegesService =
  async (ids) => {
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

  export const fetchCollegeMeta =
  async () => {
    const locationsResult =
      await pool.query(`
      SELECT DISTINCT location
      FROM colleges
      ORDER BY location
    `);

    const typesResult =
      await pool.query(`
      SELECT DISTINCT college_type
      FROM colleges
      ORDER BY college_type
    `);

    return {
      locations:
        locationsResult.rows.map(
          (item) => item.location
        ),

      types:
        typesResult.rows.map(
          (item) => item.college_type
        ),
    };
  };  