import React, { useState } from "react";
import categories from "../data/categories";

const Categories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedSubCategoryIndex, setSelectedSubCategoryIndex] =
    useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    setSelectedSubCategoryIndex(null);
  };

  const handleSubCategoryClick = (index) => {
    setSelectedSubCategoryIndex(index);
  };

  return (
    <div className="flex w-full">
      {/* Left Column - Level One Categories */}
      <div className="w-1/3 bg-gray-100 p-4">
        {categories.map((category, index) => (
          <div
            key={category.levelOne}
            className={`cursor-pointer p-2 text-xs rounded-sm ${
              selectedCategoryIndex === index
                ? "bg-gray-300 font-bold shadow-md"
                : ""
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.label}
          </div>
        ))}
      </div>

      {/* Right Column - Level Two and Level Three Categories */}
      <div className="w-2/3 bg-white p-4">
        {selectedCategoryIndex !== null && (
          <div>
            {categories[selectedCategoryIndex].items.map(
              (subCategory, index) => (
                <div key={subCategory.levelTwo}>
                  <div
                    className={`cursor-pointer p-1 text-xs ${
                      selectedSubCategoryIndex === index
                        ? "bg-gray-200 font-bold"
                        : ""
                    }`}
                    onClick={() => handleSubCategoryClick(index)}
                  >
                    {subCategory.label}
                  </div>

                  {/* Level Three Categories */}
                  {selectedSubCategoryIndex === index && (
                    <div className="pl-4 mt-2 text-xs">
                      {subCategory.items.map((item) => (
                        <div
                          key={item.levelThree}
                          className="p-1 text-gray-600"
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
