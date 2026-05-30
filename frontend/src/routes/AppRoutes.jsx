import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import CollegeDetailsPage from "../pages/CollegeDetailsPage.jsx";
import ComparePage from "../pages/ComparePage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/college/:id"
        element={<CollegeDetailsPage />}
      />

      <Route
        path="/compare"
        element={<ComparePage />}
      />
    </Routes>
  );
};

export default AppRoutes;