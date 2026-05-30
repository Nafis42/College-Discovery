import { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import CollegeCard from "../components/colleges/CollegeCard";

import { getSavedColleges } from "../api/saved.api";

const SavedCollegesPage = () => {
  const [colleges, setColleges] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchSavedColleges =
      async () => {
        try {
          const response =
            await getSavedColleges();

          setColleges(
            response.data.colleges
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchSavedColleges();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-2 text-4xl font-bold">
          Saved Colleges
        </h1>

        <p className="mb-8 text-slate-500">
          Your bookmarked colleges.
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : colleges.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold">
              No Saved Colleges
            </h2>

            <p className="mt-2 text-slate-500">
              Save colleges to access them
              later.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {colleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SavedCollegesPage;