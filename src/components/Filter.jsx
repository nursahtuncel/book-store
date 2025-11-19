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
    <div className="filter-container">
      <h2 className="filter-title">Filter Books</h2>
      <select
        className="filter-select"
        defaultValue={searchParams.get("sort") || ""}
        onChange={handleFilterChange}
      >
        <option value="">Sort</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  );
};

export default Filter;
