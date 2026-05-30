import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../api/auth.api";
import useAuthStore from "../store/useAuthStore";

const LoginPage = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuthStore();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await loginUser(formData);

      setAuth(
        response.data.user,
        response.data.token
      );

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-900 py-3 text-white"
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;