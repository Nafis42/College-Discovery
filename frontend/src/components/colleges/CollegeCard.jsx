import { Link } from "react-router-dom";
import useCollegeStore from "../../store/useCollegeStore";

const CollegeCard = ({ college }) => {
  const {
    compareIds,
    toggleCompare,
  } = useCollegeStore();

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <Link to={`/college/${college.id}`}>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {college.college_type}
          </span>

          <span className="font-semibold text-yellow-500">
            ⭐ {college.rating}
          </span>
        </div>

        <h2 className="text-xl font-bold text-slate-900 transition group-hover:text-slate-700">
          {college.name}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          📍 {college.location}
        </p>

        <div className="mt-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">
              Placement Rate
            </span>

            <span className="font-semibold">
              {college.placement_percentage}%
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-500">
              Median Package
            </span>

            <span className="font-semibold">
              ₹
              {(
                college.median_package /
                100000
              ).toFixed(1)}
              L
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-500">
              Fees
            </span>

            <span className="font-semibold">
              ₹
              {(college.fees / 100000).toFixed(1)}
              L
            </span>
          </div>
        </div>

        <div className="mt-5 border-t pt-4 text-sm font-medium text-slate-700">
          View Details →
        </div>
      </Link>

      <button
        onClick={() =>
          toggleCompare(college.id)
        }
        className={`
          mt-4
          w-full
          rounded-xl
          py-2
          text-sm
          font-medium
          transition

          ${
            compareIds.includes(college.id)
              ? "bg-slate-900 text-white"
              : "border border-slate-300 hover:bg-slate-100"
          }
        `}
      >
        {compareIds.includes(college.id)
          ? "Selected for Compare"
          : "Compare"}
      </button>
    </div>
  );
};

export default CollegeCard;