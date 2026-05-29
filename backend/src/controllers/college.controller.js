import { fetchColleges,fetchCollegeById,compareCollegesService } from "../services/college.service.js";
// import { fetchColleges } from "../services/college.service.js";

export const getColleges = async (req, res) => {
  try {

    const data = await fetchColleges(req.query);

    res.status(200).json({
      success: true,
      ...data,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch colleges",
    });

  }
};

export const getCollegeById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const data = await fetchCollegeById(id);

if (!data) {
  return res.status(404).json({
    success: false,
    message: "College not found",
  });
}
  
      res.status(200).json({
        success: true,
        ...data,
      });
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        success: false,
        message: "Failed to fetch college",
      });
    }
  };

  export const compareColleges = async (req, res) => {
    try {
      const ids = req.query.ids
        .split(",")
        .map(Number);
  
      const colleges =
        await compareCollegesService(ids);
  
      res.status(200).json({
        success: true,
        colleges,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Compare failed",
      });
    }
  };