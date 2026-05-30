const Pagination = ({
    page,
    setPage,
  }) => {
    return (
      <div className="mt-10 flex justify-center gap-4">
        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
          className="rounded-xl border px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
  
        <span className="flex items-center font-medium">
          Page {page}
        </span>
  
        <button
          onClick={() =>
            setPage(page + 1)
          }
          className="rounded-xl border px-4 py-2"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;