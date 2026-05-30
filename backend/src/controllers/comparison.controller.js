import {
    saveComparison,
    getComparisons,
    deleteComparison,
  } from "../services/comparison.service.js";
  
  export const saveComparisonHandler =
    async (req, res) => {
      try {
        const { name, collegeIds } =
          req.body;
  
        const comparison =
          await saveComparison(
            req.user.id,
            name,
            collegeIds
          );
  
        res.status(201).json({
          success: true,
          comparison,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  export const getComparisonsHandler =
    async (req, res) => {
      try {
        const comparisons =
          await getComparisons(
            req.user.id
          );
  
        res.status(200).json({
          success: true,
          comparisons,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  export const deleteComparisonHandler =
    async (req, res) => {
      try {
        await deleteComparison(
          req.user.id,
          req.params.id
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