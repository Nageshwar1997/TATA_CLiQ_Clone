import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaAngleRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import SearchBar from "../navLink/SearchBar"; // Assuming you still need the SearchBar
import categories from "../data/categories"; // Your category data
import LevelTwoThreeCategoryList from "../navLink/LevelTwoThreeCategoryList"; // Component for level two and three categories

const Categories = () => {
  const [categoryDropdown, setCategoryDropdown] = useState(true);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    setExpandedCategory(expandedCategory === index ? null : index); // Toggle expanded category
  };

  return (
    <div className="mt-[130px] flex flex-col items-center text-base font-semibold text-white w-full z-50">
      {/* Categories Dropdown */}
      <div
        className="w-full flex justify-between items-center px-4 py-2 bg-black cursor-pointer"
        onClick={() => setCategoryDropdown(!categoryDropdown)}
      >
        <span>Categories</span>
        <span>{categoryDropdown ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>

      {/* Category Dropdown Menu */}
      {categoryDropdown && (
        <div className="relative w-full text-gray-500 bg-white rounded-lg shadow-lg flex flex-col p-4">
          {categories.map((category, index) => (
            <div
              key={category.levelOne}
              className={`py-2 cursor-pointer flex justify-between ${
                selectedCategoryIndex === index ? "text-black font-bold" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              <span>{category.label}</span>
              {selectedCategoryIndex === index && <FaAngleRight />}
            </div>
          ))}

          {/* Level Two Items */}
          {expandedCategory === selectedCategoryIndex && (
            <div className="mt-2">
              {categories[selectedCategoryIndex].items.map((item) => (
                <LevelTwoThreeCategoryList className="absolute bottom-0 left-0 z-100" key={item.levelTwo} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
