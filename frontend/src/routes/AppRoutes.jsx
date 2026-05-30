import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import CollegeDetailsPage from "../pages/CollegeDetailsPage.jsx";
import ComparePage from "../pages/ComparePage.jsx";

import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/college/:id"
        element={<CollegeDetailsPage />}
      />

      <Route
        path="/compare"
        element={<ComparePage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />
    </Routes>
  );
};

export default AppRoutes;