import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-white
          py-4
          pl-12
          pr-4
          shadow-sm
          outline-none
          transition
          focus:border-slate-400
          focus:ring-2
          focus:ring-slate-200
        "
      />
    </div>
  );
};

export default SearchBar;