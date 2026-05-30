const StatsCard = ({ title, value }) => {
    return (
      <div className="rounded-2xl bg-white p-5 shadow-sm border">
        <p className="text-sm text-slate-500">
          {title}
        </p>
  
        <h3 className="mt-2 text-2xl font-bold">
          {value}
        </h3>
      </div>
    );
  };
  
  export default StatsCard;