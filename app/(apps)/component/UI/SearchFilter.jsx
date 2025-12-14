import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countrydetails,
  setCountryDetails,
}) => {
  const handleInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };
  const sortCountries = (value) => {
    const sortCountry = [...countrydetails].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountryDetails(sortCountry);
  };
  return (
    <nav className="w-full bg-black py-3 shadow-md">
      <div className="max-w-[1050px] mx-auto flex items-center justify-between gap-2 px-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] max-w-full border text-white border-gray-300 rounded-md px-2 py-2 focus:outline-none "
          value={search}
          onChange={handleInput}
        />

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2  text-white rounded-md hover:bg-gray-700 transition"
            onClick={() => sortCountries("asc")}
          >
            Asc
          </button>
          <button
            className="px-4 py-2 text-white rounded-md hover:bg-gray-700 transition"
            onClick={() => sortCountries("desc")}
          >
            Desc
          </button>
        </div>

        {/* Select Filter */}
        <select
          className="border text-white bg-black border-gray-300 rounded-md px-3 py-2 focus:outline-none "
          value={filter}
          onChange={handleFilter}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </nav>
  );
};

export default SearchFilter;
