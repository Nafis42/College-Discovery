import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import CollegeDetailsPage from "../pages/CollegeDetailsPage.jsx";
import ComparePage from "../pages/ComparePage.jsx";

import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import SavedCollegesPage from "../pages/SavedCollegesPage.jsx";
import MyComparisonsPage from "../pages/MyComparisonsPage.jsx";

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
      <Route
  path="/saved"
  element={<SavedCollegesPage />}
/>
<Route
  path="/my-comparisons"
  element={
    <MyComparisonsPage />
  }
/>
    </Routes>
    
  );
};

export default AppRoutes;