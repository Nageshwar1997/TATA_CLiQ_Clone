import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import categories from "./data/categories";
import brands from "./data/brands";

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
    <div className="relative flex justify-between items-center text-lg font-semibold text-white w-full h-[60px]">
      {/* Categories Dropdown */}
      <div
        className="relative transition-all duration-300 flex items-center space-x-2 h-full px-4 hover:bg-white hover:text-black cursor-pointer"
        onMouseEnter={() => setCategoryDropdown(true)}
      >
        <span>Categories</span>
        <span>{categoryDropdown ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>

      {/* Brands Dropdown */}
      <div
        className="relative transition-all duration-300 flex items-center space-x-2 h-full px-4 hover:bg-white hover:text-black cursor-pointer"
        onMouseEnter={() => setBrandDropdown(true)}
        onMouseLeave={() => setBrandDropdown(false)}
      >
        <p>Brands</p>
        <span>{brandDropdown ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>

      {/* Other Navbar Items */}
      <div>Search</div>
      <div>WishList</div>
      <div>Cart</div>

      {/* Dropdown Menu for Categories */}
      {categoryDropdown && (
        <div className="absolute top-[60px] left-0 w-full text-gray-500 rounded-lg shadow-lg p-4 flex">
          {/* Level One Categories */}
          <div
            className="w-1/4 h-[80vh] border-r border-gray-400 pr-4 overflow-y-auto custom-scrollbar"
          >
            {categories.map((category, index) => (
              <div
                key={category.label}
                className={`py-[18px] cursor-pointer flex items-center justify-between border-b border-gray-400 ${
                  selectedCategoryIndex === index ? "text-black shadow-md border-none" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                <span>{category.label}</span>
                {selectedCategoryIndex === index && (
                  <span className="text-gray-500">
                    <FaAngleRight />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Level Two and Level Three Items */}
          <div className="h-[80vh] px-4 flex flex-col flex-wrap ">
            {categories[selectedCategoryIndex].items.map((item) => (
              <div key={item.levelTwo} className="w-[45%] mb-4 ">
                <h4 className="font-semibold text-[16px]">{item.label}</h4>
                <div className="ml-4">
                  {item.items.map((subItem) => (
                    <p
                      key={subItem.levelThree}
                      className="text-[14px] text-gray-200"
                    >
                      {subItem.label}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dropdown Menu for Brands (Placeholder) */}
      {brandDropdown && (
        <div className="absolute top-[60px] left-0 w-full text-gray-500 rounded-lg shadow-lg p-4 flex">
        {/* Level One Brands */}
        <div
          className="w-1/4 h-[80vh] border-r border-gray-400 pr-4 overflow-y-auto custom-scrollbar"
        >
          {brands.map((brand, index) => (
            <div
              key={brand.label}
              className={`py-[18px] cursor-pointer flex items-center justify-between border-b border-gray-400 ${
                selectedBrandIndex === index ? "text-black shadow-md border-none" : ""
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
        <div className="h-[80vh] px-4 flex flex-col flex-wrap ">
          {brands[selectedBrandIndex].items.map((item) => (
            <div key={item.levelTwo} className="w-[45%] mb-4 ">
              <h4 className="font-semibold text-[16px]">{item.label}</h4>
              <div className="ml-4">
                {item.items.map((subItem) => (
                  <p
                    key={subItem.levelThree}
                    className="text-[14px] text-gray-200"
                  >
                    {subItem.label}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default BottomNavbar;
