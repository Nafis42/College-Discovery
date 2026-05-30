import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/common/Navbar";

import { compareColleges } from "../api/college.api";

import useCollegeStore from "../store/useCollegeStore";

const ComparePage = () => {
  const { compareIds } = useCollegeStore();

  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComparedColleges = async () => {
      try {
        if (compareIds.length < 2) {
          setLoading(false);
          return;
        }

        const response =
          await compareColleges(compareIds);

        setColleges(response.data.colleges);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchComparedColleges();
  }, [compareIds]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <div className="py-20 text-center">
          Loading comparison...
        </div>
      </div>
    );
  }

  if (compareIds.length < 2) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <div className="mx-auto max-w-3xl py-20 text-center">
          <h1 className="text-3xl font-bold">
            Compare Colleges
          </h1>

          <p className="mt-4 text-slate-500">
            Select at least 2 colleges to compare.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 text-white"
          >
            Browse Colleges
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-8 text-4xl font-bold">
          College Comparison
        </h1>

        <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-100">
                <th className="p-4 text-left">
                  Metric
                </th>

                {colleges.map((college) => (
                  <th
                    key={college.id}
                    className="p-4 text-left"
                  >
                    {college.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">
                  Location
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.location}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Type
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.college_type}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Rating
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    ⭐ {college.rating}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Placement %
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    {college.placement_percentage}%
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Median Package
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    ₹
                    {(
                      college.median_package /
                      100000
                    ).toFixed(1)}
                    L
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Highest Package
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    ₹
                    {(
                      college.highest_package /
                      100000
                    ).toFixed(1)}
                    L
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-medium">
                  Fees
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-4"
                  >
                    ₹
                    {(
                      college.fees / 100000
                    ).toFixed(1)}
                    L
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;