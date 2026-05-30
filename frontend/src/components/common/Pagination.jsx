const Pagination = ({
    page,
    totalPages,
    setPage,
  }) => {
    if (totalPages <= 1) {
      return null;
    }
  
    return (
      <div className="mt-12 flex items-center justify-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="
            rounded-xl
            border
            px-4
            py-2
            text-sm
            transition
            disabled:cursor-not-allowed
            disabled:opacity-50
            hover:bg-slate-100
          "
        >
          Previous
        </button>
  
        {[...Array(totalPages)].map(
          (_, index) => {
            const pageNumber = index + 1;
  
            return (
              <button
                key={pageNumber}
                onClick={() =>
                  setPage(pageNumber)
                }
                className={`
                  h-10
                  w-10
                  rounded-xl
                  text-sm
                  font-medium
                  transition
  
                  ${
                    page === pageNumber
                      ? "bg-slate-900 text-white"
                      : "border hover:bg-slate-100"
                  }
                `}
              >
                {pageNumber}
              </button>
            );
          }
        )}
  
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="
            rounded-xl
            border
            px-4
            py-2
            text-sm
            transition
            disabled:cursor-not-allowed
            disabled:opacity-50
            hover:bg-slate-100
          "
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;