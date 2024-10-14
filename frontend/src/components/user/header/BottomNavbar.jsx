import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaAngleRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiHandbagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import categories from "./data/categories";
import brands from "./data/brands";
import LevelTwoThreeCategoryList from "./navLink/LevelTwoThreeCategoryList";
import LevelTwoThreeBrandList from "./navLink/LevelTwoThreeBrandList";
import SearchBar from "./navLink/SearchBar";

const BottomNavbar = () => {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(0); // New state to track expanded categories

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    setExpandedCategory(expandedCategory === index ? null : index); // Toggle expansion
  };

  const handleBrandClick = (index) => {
    setSelectedBrandIndex(index);
  };

  const handleSearchInput = () => {};

  return (
    <div className="relative flex justify-between items-center text-base sm:text-lg font-semibold text-white w-full h-[60px] sm:pr-2 md:pr-4">
      {/* Categories Dropdown */}
      <div
        className="hidden relative text-xs sm:text-sm lg:text-lg transition-all duration-300 md:flex items-center space-x-1 sm:space-x-2 h-full px-1 sm:px-2 md:px-4 hover:bg-white hover:text-black cursor-pointer"
        onMouseEnter={() => {
          setCategoryDropdown(true);
          setBrandDropdown(false);
        }}
        onMouseLeave={() => setCategoryDropdown(false)}
      >
        <span>Categories</span>
        <span>{categoryDropdown ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>

      {/* Brands Dropdown */}
      <div
        className="hidden relative text-xs sm:text-sm lg:text-lg transition-all duration-300 md:flex items-center space-x-1 sm:space-x-2 h-full px-1 sm:px-2 md:px-4 hover:bg-white hover:text-black cursor-pointer"
        onMouseEnter={() => {
          setBrandDropdown(true);
          setCategoryDropdown(false);
        }}
        onMouseLeave={() => setBrandDropdown(false)}
      >
        <p>Brands</p>
        <span>{brandDropdown ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}</span>
      </div>

      {/* Search Bar and Icons */}
      <div className="max-w-[70%] flex w-full md:max-w-[60%] bg-[#4A4A4A] rounded-md px-2 sm:px-4 py-1 gap-1 sm:gap-2 items-center">
        <SearchBar handleSearchInput={handleSearchInput} />
      </div>

      {/* Wishlist Icon */}
      <div className="cursor-pointer">
        <CiHeart size={25} />
      </div>

      {/* Handbag Icon */}
      <div className="cursor-pointer">
        <PiHandbagLight size={20} />
      </div>

      {/* Category Dropdown Menu */}
      {categoryDropdown && (
        <div
          className="absolute top-[60px] left-[-20%] sm:left-0 w-full text-gray-500 bg-white rounded-lg shadow-lg p-4 flex flex-col sm:flex-row"
          onMouseEnter={() => setCategoryDropdown(true)}
          onMouseLeave={() => setCategoryDropdown(false)}
        >
          {/* Level One Categories */}
          <div className="w-full sm:w-[18%] h-[50vh] sm:h-[80vh] md:border-r border-gray-400 pr-4">
            {categories.map((category, index) => (
              <div
                key={category.levelOne}
                className={`py-2 md:py-5 cursor-pointer flex items-center justify-between ${
                  selectedCategoryIndex === index
                    ? "text-black shadow-md border-none"
                    : "border-b border-gray-400"
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                <span className="pl-2">{category.label}</span>
                {selectedCategoryIndex === index && (
                  <span className="text-gray-500 pl-2">
                    <FaAngleRight />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Level Two and Level Three Items */}
          <div className="h-[50vh] sm:h-[80vh] w-full sm:w-[calc(100%-20%)] px-4 flex flex-col gap-2 flex-wrap">
            {expandedCategory === selectedCategoryIndex && (
              categories[selectedCategoryIndex].items.map((item) => (
                <LevelTwoThreeCategoryList key={item.levelTwo} item={item} />
              ))
            )}
          </div>
        </div>
      )}

      {/* Brand Dropdown Menu */}
      {brandDropdown && (
        <div
          className="absolute top-[60px] left-0 w-full text-gray-500 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row justify-between"
          onMouseEnter={() => setBrandDropdown(true)}
          onMouseLeave={() => setBrandDropdown(false)}
        >
          {/* Level One Brands */}
          <div className="w-full sm:w-[22%] h-[50vh] sm:h-[80vh] px-4 md:border-r border-gray-400">
            {brands.map((brand, index) => (
              <div
                key={brand.levelOne}
                className={`py-5 cursor-pointer flex items-center justify-between ${
                  selectedBrandIndex === index
                    ? "text-black shadow-md border-none"
                    : "border-b border-gray-400"
                }`}
                onClick={() => handleBrandClick(index)}
              >
                <span>{brand.label}</span>
                {selectedBrandIndex === index && (
                  <span className="text-gray-500">
                    <FaAngleRight />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Level Two and Level Three Items */}
          <div className="h-[50vh] sm:h-[80vh] w-full sm:w-[calc(100%-60%)] pt-2 px-2 flex flex-col gap-2 flex-wrap">
            {brands[selectedBrandIndex].items.map((item) => (
              <LevelTwoThreeBrandList key={item.levelTwo} item={item} />
            ))}
          </div>

          {/* Brand Images */}
          <div className="hidden sm:grid w-full sm:w-[35%] grid-cols-2 place-content-start gap-4 bg-gray-50 shadow p-2">
            {brands[selectedBrandIndex].brandImages.map((image) => (
              <div
                key={image.alt}
                className="flex flex-col items-center space-y-2 p-2 rounded-full"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-20 h-20 sm:w-32 sm:h-32 object-contain rounded-full cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNavbar;
