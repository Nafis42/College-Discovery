import { GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import useAuthStore from "../../store/useAuthStore";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <GraduationCap size={28} />
          College Discovery
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/compare"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Compare
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="hidden text-sm md:block">
                <p className="font-medium text-slate-900">
                  Hi, {user.name}
                </p>

                <p className="text-xs text-slate-500">
                  {user.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;