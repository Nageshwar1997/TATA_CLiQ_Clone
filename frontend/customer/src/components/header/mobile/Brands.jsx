import React, { useState } from "react";
import brands from "../data/brands";

const Brands = () => {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [selectedSubBrandIndex, setSelectedSubBrandIndex] = useState(null);

  const handleBrandClick = (index) => {
    setSelectedBrandIndex(index);
    setSelectedSubBrandIndex(null);
  };

  const handleSubBrandClick = (index) => {
    setSelectedSubBrandIndex(index);
  };

  return (
    <div className="flex w-full h-full">
      {/* Left Column - Level One Brands */}
      <div className="w-1/3 bg-gray-100 p-4">
        {brands.map((brand, index) => (
          <div
            key={brand.levelOne}
            className={`cursor-pointer p-2 text-xs rounded-sm ${
              selectedBrandIndex === index
                ? "bg-gray-300 font-bold shadow-md"
                : ""
            }`}
            onClick={() => handleBrandClick(index)}
          >
            {brand.label}
          </div>
        ))}
      </div>

      {/* Right Column - Level Two and Level Three Categories */}
      <div className="w-2/3 bg-white p-4">
        {selectedBrandIndex !== null && (
          <div>
            {brands[selectedBrandIndex].items.map((subBrand, index) => (
              <div key={subBrand.levelTwo}>
                <div
                  className={`cursor-pointer p-1 text-xs ${
                    selectedSubBrandIndex === index
                      ? "bg-gray-200 font-bold"
                      : ""
                  }`}
                  onClick={() => handleSubBrandClick(index)}
                >
                  {subBrand.label}
                </div>

                {/* Level Three Categories */}
                {selectedSubBrandIndex === index && (
                  <div className="pl-4 mt-2 text-xs">
                    {subBrand.items.map((item) => (
                      <div key={item.levelThree} className="p-1 text-gray-600">
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
