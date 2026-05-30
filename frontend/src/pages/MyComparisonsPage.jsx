import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import {
  getComparisons,
  deleteComparison,
} from "../api/comparison.api";

import useCollegeStore from "../store/useCollegeStore";

const MyComparisonsPage = () => {
  const navigate = useNavigate();

  const { setCompareIds } =
    useCollegeStore();

  const [comparisons, setComparisons] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await getComparisons();

        setComparisons(
          response.data.comparisons
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteComparison(id);

      setComparisons((prev) =>
        prev.filter(
          (comparison) =>
            comparison.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = (
    collegeIds
  ) => {
    setCompareIds(collegeIds);

    navigate("/compare");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <div className="py-20 text-center">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-2 text-4xl font-bold">
          My Comparisons
        </h1>

        <p className="mb-8 text-slate-500">
          Saved comparison sets.
        </p>

        {comparisons.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold">
              No Saved Comparisons
            </h2>

            <p className="mt-2 text-slate-500">
              Save comparisons from the
              compare page.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {comparisons.map(
              (comparison) => (
                <div
                  key={comparison.id}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">
                    {comparison.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {
                      comparison
                        .college_ids
                        .length
                    }{" "}
                    colleges
                  </p>

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() =>
                        handleOpen(
                          comparison.college_ids
                        )
                      }
                      className="rounded-xl bg-slate-900 px-4 py-2 text-white"
                    >
                      Open
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          comparison.id
                        )
                      }
                      className="rounded-xl border border-red-300 px-4 py-2 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyComparisonsPage;