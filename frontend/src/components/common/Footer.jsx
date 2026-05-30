import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900 p-3 text-white">
                <GraduationCap size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  College Discovery
                </h2>

                <p className="text-sm text-slate-500">
                  Find the right college.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              Explore colleges across India, compare
              placements, fees, ratings and courses
              to make better academic decisions.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Platform Features
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>College Search</li>
              <li>Advanced Filtering</li>
              <li>Placement Insights</li>
              <li>Course Information</li>
              <li>College Comparison</li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Platform Highlights
            </h3>

            <div className="space-y-4">

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  50+
                </h4>

                <p className="text-sm text-slate-500">
                  Colleges Listed
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  300+
                </h4>

                <p className="text-sm text-slate-500">
                  Courses Available
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  200+
                </h4>

                <p className="text-sm text-slate-500">
                  Student Reviews
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">

          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} College Discovery Platform
            </p>

            <p className="text-sm text-slate-500">
              Built using React, Node.js, PostgreSQL & Neon
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;