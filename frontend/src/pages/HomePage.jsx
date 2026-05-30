import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Footer from "../components/common/Footer";

import SearchBar from "../components/colleges/SearchBar";
import CollegeCard from "../components/colleges/CollegeCard";
import FilterBar from "../components/colleges/FilterBar";
import SkeletonCard from "../components/common/SkeletonCard";

import Pagination from "../components/common/Pagination";

import {
  getColleges,
  getCollegeMeta,
} from "../api/college.api";

import useCollegeStore from "../store/useCollegeStore";

const HomePage = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalPages, setTotalPages] =
    useState(1);

  const [locations, setLocations] =
    useState([]);

  const [types, setTypes] =
    useState([]);

  const {
    search,
    location,
    type,
    sortBy,
    page,
    compareIds,

    setSearch,
    setLocation,
    setType,
    setSortBy,
    setPage,
  } = useCollegeStore();

  // Fetch colleges
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await getColleges({
          search,
          location,
          type,
          sortBy,
          page,
          limit: 9,
        });

        setColleges(
          response.data.colleges
        );

        setTotalPages(
          response.data.totalPages
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    search,
    location,
    type,
    sortBy,
    page,
  ]);

  // Fetch filter metadata
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const response =
          await getCollegeMeta();

        setLocations(
          response.data.locations
        );

        setTypes(
          response.data.types
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeta();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6">
        <Hero />

        <div className="mx-auto mb-8 max-w-3xl">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <FilterBar
          location={location}
          setLocation={setLocation}
          type={type}
          setType={setType}
          sortBy={sortBy}
          setSortBy={setSortBy}
          locations={locations}
          types={types}
        />

        {compareIds.length >= 2 && (
          <div className="mb-8 rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  Compare Colleges
                </h3>

                <p className="text-sm text-slate-300">
                  {compareIds.length} colleges
                  selected
                </p>
              </div>

              <Link
                to="/compare"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Compare Now
              </Link>
            </div>
          </div>
        )}

{loading ? (
  <>
    <div className="mb-4">
      <p className="text-sm text-slate-500">
        Loading colleges...
      </p>
    </div>

    <div className="grid gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  </>
) : colleges.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">
              No colleges found
            </h2>

            <p className="mt-2 text-slate-500">
              Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Showing {colleges.length} colleges
              </p>

              {compareIds.length > 0 && (
                <p className="text-sm font-medium text-slate-700">
                  {compareIds.length} selected
                  for comparison
                </p>
              )}
            </div>

            <div className="grid gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3">
              {colleges.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;