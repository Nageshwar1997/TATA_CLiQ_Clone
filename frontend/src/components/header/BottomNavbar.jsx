import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaAngleRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiHandbagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import categories from "./data/categories";
import brands from "./data/brands";
import LevelTwoThreeCategoryList from "./navLink/LevelTwoThreeCategoryList";
import LevelTwoThreeBrandList from "./navLink/LevelTwoThreeBrandList";

const BottomNavbar = () => {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  const handleBrandClick = (index) => {
    setSelectedBrandIndex(index);
  };


  return (
    <div className="relative flex justify-between items-center gap-2 lg:gap-0 text-base sm:text-lg font-semibold text-white w-full h-[60px] sm:pr-2 md:pr-4">
      {/* Categories Dropdown */}
      <div
        className="hidden relative text-xs sm:text-sm lg:text-lg transition-all duration-300 sm:flex items-center space-x-1 sm:space-x-2 h-full px-1 sm:px-2 md:px-4 hover:bg-white hover:text-black cursor-pointer"
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
        className="hidden relative text-xs sm:text-sm lg:text-lg transition-all duration-300 sm:flex items-center space-x-1 sm:space-x-2 h-full px-1 sm:px-2 md:px-4 hover:bg-white hover:text-black cursor-pointer"
        onMouseEnter={() => {
          setBrandDropdown(true);
          setCategoryDropdown(false);
        }}
        onMouseLeave={() => setBrandDropdown(false)}
      >
        <p>Brands</p>
        <span>
          {brandDropdown ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
        </span>
      </div>

      {/* Search Bar and Icons */}
      <div className="relative max-w-[85%] flex w-full md:max-w-[60%] bg-[#4A4A4A] rounded-md px-2 sm:px-4 py-1 gap-1 sm:gap-2 items-center">
        <IoIosSearch className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2  text-[#C4C4C4] font-semibold text-lg sm:text-xl cursor-pointer" />
        <div className="w-full">
          <input
            type="text"
            placeholder="Search for Products, Brands, Categories"
            className="w-full bg-transparent outline-none text-[#C4C4C4] text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Wishlist Icon */}
      <div className="cursor-pointer text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
        <CiHeart />
      </div>

      {/* Handbag Icon */}
      <div className="cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
        <PiHandbagLight />
      </div>

      {/* Category Dropdown Menu */}
      {categoryDropdown && (
        <div
          className="absolute top-[60px] h-[100vh] sm:h-[85vh] left-0 w-full text-gray-500 bg-white rounded-lg shadow-lg p-4 flex flex-col sm:flex-row"
          onMouseEnter={() => setCategoryDropdown(true)}
          onMouseLeave={() => setCategoryDropdown(false)}
        >
          {/* Level One Categories */}
          <div className="w-full sm:w-[18%] md:border-r border-gray-400 pr-4">
            {categories.map((category, index) => (
              <div
                key={category.levelOne}
                className={`py-2 md:py-5 cursor-pointer flex items-center justify-between text-sm lg:text-base ${
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
          <div className="w-full sm:w-[calc(100%-20%)] px-4 flex flex-col gap-2 flex-wrap">
            {categories[selectedCategoryIndex].items.map((item) => (
              <LevelTwoThreeCategoryList key={item.levelTwo} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Brand Dropdown Menu */}
      {brandDropdown && (
        <div
          className="absolute top-[60px] h-[100vh] sm:h-[85vh] left-0 w-full text-gray-500 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row justify-between"
          onMouseEnter={() => setBrandDropdown(true)}
          onMouseLeave={() => setBrandDropdown(false)}
        >
          {/* Level One Brands */}
          <div className="w-full sm:w-[22%] text-sm lg:text-lg px-4 md:border-r border-gray-400">
            {brands.map((brand, index) => (
              <div
                key={brand.levelOne}
                className={`py-5 px-2 cursor-pointer flex items-center justify-between ${
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
          <div className="w-full sm:w-[calc(100%-60%)] pt-2 px-2 flex flex-col gap-2 flex-wrap text-sm lg:text-lg">
            {brands[selectedBrandIndex].items.map((item) => (
              <LevelTwoThreeBrandList key={item.levelTwo} item={item} />
            ))}
          </div>

          {/* Brand Images */}
          <div className="hidden sm:grid w-full sm:w-[35%] md:w-[30%] lg:w-[25%] md:grid-cols-2 place-content-start gap-4 md:gap-6 bg-gray-50 shadow p-4">
            {brands[selectedBrandIndex].brandImages.map((image) => (
              <div
                key={image.alt}
                className="relative flex items-center justify-center cursor-pointer p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-full transition-transform duration-300 ease-in-out"
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
