import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ handleSearchInput }) => {
  return (
    <>
      <IoIosSearch className="text-[#C4C4C4] hidden sm:block font-semibold text-lg sm:text-xl cursor-pointer" />
      <div className="w-full">
        <input
          onChange={handleSearchInput}
          type="text"
          placeholder="Search for Product"
          className="w-full bg-transparent outline-none text-[#C4C4C4] text-sm sm:text-base"
        />
      </div>
    </>
  );
};

export default SearchBar;
