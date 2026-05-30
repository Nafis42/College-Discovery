import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";

import StatsCard from "../components/colleges/StatsCard";

import CoursesTable from "../components/colleges/CoursesTable";

import ReviewCard from "../components/colleges/ReviewCard";

import {
  getCollegeById,
} from "../api/college.api";

const CollegeDetailsPage = () => {
  const { id } = useParams();

  const [college, setCollege] =
    useState(null);

  const [courses, setCourses] =
    useState([]);

  const [reviews, setReviews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const response =
          await getCollegeById(id);

        setCollege(
          response.data.college
        );

        setCourses(
          response.data.courses
        );

        setReviews(
          response.data.reviews
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollege();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm">
            {college.college_type}
          </span>

          <h1 className="mt-4 text-4xl font-bold">
            {college.name}
          </h1>

          <p className="mt-2 text-slate-500">
            📍 {college.location}
          </p>

          <p className="mt-4 text-slate-700">
            {college.description}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <StatsCard
            title="Rating"
            value={`⭐ ${college.rating}`}
          />

          <StatsCard
            title="Placement"
            value={`${college.placement_percentage}%`}
          />

          <StatsCard
            title="Median Package"
            value={`₹${(
              college.median_package /
              100000
            ).toFixed(1)}L`}
          />

          <StatsCard
            title="Highest Package"
            value={`₹${(
              college.highest_package /
              100000
            ).toFixed(1)}L`}
          />
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            Courses
          </h2>

          <CoursesTable
            courses={courses}
          />
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            Student Reviews
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollegeDetailsPage;