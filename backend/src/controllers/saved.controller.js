import {
    saveCollege,
    removeSavedCollege,
    getSavedColleges,
  } from "../services/saved.service.js";
  
  export const saveCollegeHandler =
    async (req, res) => {
      try {
        const collegeId =
          req.params.collegeId;
  
        await saveCollege(
          req.user.id,
          collegeId
        );
  
        res.status(200).json({
          success: true,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  export const removeSavedCollegeHandler =
    async (req, res) => {
      try {
        const collegeId =
          req.params.collegeId;
  
        await removeSavedCollege(
          req.user.id,
          collegeId
        );
  
        res.status(200).json({
          success: true,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  export const getSavedCollegesHandler =
    async (req, res) => {
      try {
        const colleges =
          await getSavedColleges(
            req.user.id
          );
  
        res.status(200).json({
          success: true,
          colleges,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };