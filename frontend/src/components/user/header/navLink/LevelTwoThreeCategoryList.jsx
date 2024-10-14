import React from "react";

const LevelTwoThreeCategoryList = ({ item }) => {
  return (
    <div>
      <h3 className="font-bold text-[12px] sm:text-[14px] lg:text-[16px] pr-2 sm:pr-4 text-black cursor-pointer">
        {item.label}
      </h3>
      {item.items.map((subItem) => (
        <p
          key={subItem.levelThree}
          className="text-sm lg:text-lg font-semibold text-gray-600 cursor-pointer hover:text-[#ff258b] transition duration-200"
        >
          {subItem.label}
        </p>
      ))}
    </div>
  );
};

export default LevelTwoThreeCategoryList;
