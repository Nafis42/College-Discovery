const FilterBar = ({
    location,
    setLocation,
    type,
    setType,
    sortBy,
    setSortBy,
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
  
          <option value="Delhi">
            Delhi
          </option>
  
          <option value="Mumbai">
            Mumbai
          </option>
  
          <option value="Hyderabad">
            Hyderabad
          </option>
  
          <option value="Chennai">
            Chennai
          </option>
  
          <option value="Kolkata">
            Kolkata
          </option>
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
  
          <option value="IIT">
            IIT
          </option>
  
          <option value="NIT">
            NIT
          </option>
  
          <option value="IIIT">
            IIIT
          </option>
  
          <option value="Private">
            Private
          </option>
  
          <option value="University">
            University
          </option>
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