import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <GraduationCap size={28} />
          College Discovery
        </Link>

        <Link
          to="/compare"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Compare
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;