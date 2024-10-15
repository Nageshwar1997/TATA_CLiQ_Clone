import React from "react";

const LevelTwoThreeCategoryList = ({ item }) => {
  return (
    <div>
      <h3 className="font-bold text-[10px] lg:text-[15px] pr-2 sm:pr-4 text-black cursor-pointer">
        {item.label}
      </h3>
      {item.items.map((subItem) => (
        <p
          key={subItem.levelThree}
          className="text-[10px] lg:text-[14px] font-semibold text-gray-600 cursor-pointer hover:text-[#ff258b] transition duration-200"
        >
          {subItem.label}
        </p>
      ))}
    </div>
  );
};

export default LevelTwoThreeCategoryList;
