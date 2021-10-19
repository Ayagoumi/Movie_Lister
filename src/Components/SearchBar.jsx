import React from "react";

const SearchBar = (props) => {
  return (
    <div className="text-gray-600 w-72">
      <input
        className="w-full px-5 border-2 border-gray-300 bg-white h-10  rounded-lg text-sm focus:outline-none focus:ring-2"
        type="search"
        name="search"
        placeholder="Search..."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
