import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import { compareColleges } from "../api/college.api";
import { saveComparison } from "../api/comparison.api";

import useCollegeStore from "../store/useCollegeStore";
import useAuthStore from "../store/useAuthStore";

const ComparePage = () => {
  const navigate = useNavigate();

  const { compareIds } =
    useCollegeStore();

  const { token } =
    useAuthStore();

  const [colleges, setColleges] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [
    comparisonName,
    setComparisonName,
  ] = useState("");

  const [saving, setSaving] =
    useState(false);

  const handleSaveComparison =
    async () => {
      try {
        if (!token) {
          navigate("/login");
          return;
        }

        if (
          !comparisonName.trim()
        ) {
          alert(
            "Please enter a comparison name"
          );

          return;
        }

        setSaving(true);

        await saveComparison({
          name: comparisonName,
          collegeIds:
            compareIds,
        });

        alert(
          "Comparison saved successfully"
        );

        setComparisonName("");
      } catch (error) {
        console.error(error);
      } finally {
        setSaving(false);
      }
    };

  useEffect(() => {
    const fetchComparedColleges =
      async () => {
        try {
          if (
            compareIds.length < 2
          ) {
            setLoading(false);
            return;
          }

          const response =
            await compareColleges(
              compareIds
            );

          setColleges(
            response.data.colleges
          );
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
            Select at least 2
            colleges to compare.
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

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold">
            Save This Comparison
          </h3>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Dream IITs"
              value={comparisonName}
              onChange={(e) =>
                setComparisonName(
                  e.target.value
                )
              }
              className="flex-1 rounded-xl border p-3"
            />

            <button
              onClick={
                handleSaveComparison
              }
              disabled={saving}
              className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
            >
              {saving
                ? "Saving..."
                : "Save Comparison"}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-100">
                <th className="p-4 text-left">
                  Metric
                </th>

                {colleges.map(
                  (college) => (
                    <th
                      key={
                        college.id
                      }
                      className="p-4 text-left"
                    >
                      {
                        college.name
                      }
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">
                  Location
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      {
                        college.location
                      }
                    </td>
                  )
                )}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Type
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      {
                        college.college_type
                      }
                    </td>
                  )
                )}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Rating
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      ⭐{" "}
                      {
                        college.rating
                      }
                    </td>
                  )
                )}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Placement %
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      {
                        college.placement_percentage
                      }
                      %
                    </td>
                  )
                )}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Median Package
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      ₹
                      {(
                        college.median_package /
                        100000
                      ).toFixed(
                        1
                      )}
                      L
                    </td>
                  )
                )}
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">
                  Highest Package
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      ₹
                      {(
                        college.highest_package /
                        100000
                      ).toFixed(
                        1
                      )}
                      L
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="p-4 font-medium">
                  Fees
                </td>

                {colleges.map(
                  (college) => (
                    <td
                      key={
                        college.id
                      }
                      className="p-4"
                    >
                      ₹
                      {(
                        college.fees /
                        100000
                      ).toFixed(
                        1
                      )}
                      L
                    </td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComparePage;