const FilterBar = ({
    location,
    setLocation,
    type,
    setType,
    sortBy,
    setSortBy,
    locations,
    types,
  }) => {
    return (
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="rounded-xl border p-3"
        >
          <option value="">
            All Locations
          </option>
  
          {locations.map((location) => (
    <option
      key={location}
      value={location}
    >
      {location}
    </option>
  ))}
        </select>
  
        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          className="rounded-xl border p-3"
        >
          <option value="">
            All Types
          </option>
  
          {types.map((type) => (
    <option
      key={type}
      value={type}
    >
      {type}
    </option>
  ))}
        </select>
  
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="rounded-xl border p-3"
        >
          <option value="">
            Sort By
          </option>
  
          <option value="rating">
            Rating
          </option>
  
          <option value="fees">
            Fees
          </option>
  
          <option value="median_package">
            Median Package
          </option>
        </select>
      </div>
    );
  };
  
  export default FilterBar;