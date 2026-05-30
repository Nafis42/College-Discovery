import api from "./axios";

export const saveComparison = (data) => {
  return api.post(
    "/comparisons",
    data
  );
};

export const getComparisons = () => {
  return api.get("/comparisons");
};

export const deleteComparison = (
  id
) => {
  return api.delete(
    `/comparisons/${id}`
  );
};