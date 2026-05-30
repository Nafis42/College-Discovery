const SkeletonCard = () => {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="mb-4 flex justify-between">
            <div className="h-6 w-20 rounded bg-slate-200"></div>
  
            <div className="h-6 w-12 rounded bg-slate-200"></div>
          </div>
  
          <div className="h-7 w-3/4 rounded bg-slate-200"></div>
  
          <div className="mt-3 h-4 w-1/2 rounded bg-slate-200"></div>
  
          <div className="mt-6 space-y-3">
            <div className="h-4 rounded bg-slate-200"></div>
  
            <div className="h-4 rounded bg-slate-200"></div>
  
            <div className="h-4 rounded bg-slate-200"></div>
          </div>
  
          <div className="mt-6 h-10 rounded-xl bg-slate-200"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;