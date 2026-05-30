const ReviewCard = ({ review }) => {
    return (
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            {review.reviewer_name}
          </h3>
  
          <span>
            ⭐ {review.rating}
          </span>
        </div>
  
        <p className="mt-1 text-sm text-slate-500">
          Batch {review.graduation_year}
        </p>
  
        <p className="mt-4 text-slate-700">
          {review.review_text}
        </p>
      </div>
    );
  };
  
  export default ReviewCard;