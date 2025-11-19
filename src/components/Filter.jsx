import React from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      searchParams.set("sort", selectedValue);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  };

  return (
    <div>
      <h2>Filtrele</h2>
      <div>
        <select
          defaultValue={searchParams.get("sort")}
          onChange={handleFilterChange}
          name="category"
          id=""
        >
          <option value="">Filter</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
