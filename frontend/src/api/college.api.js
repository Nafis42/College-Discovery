import api from "./axios";

export const getColleges = (params) => {
  return api.get("/colleges", { params });
};

export const getCollegeById = (id) => {
  return api.get(`/colleges/${id}`);
};

export const compareColleges = (
    ids
  ) => {
    return api.get(
      `/colleges/compare/list?ids=${ids.join(
        ","
      )}`
    );
  };