import api from "./axios";

export const getSavedColleges = () => {
  return api.get("/saved");
};

export const saveCollege = (
  collegeId
) => {
  return api.post(
    `/saved/${collegeId}`
  );
};

export const removeSavedCollege = (
  collegeId
) => {
  return api.delete(
    `/saved/${collegeId}`
  );
};