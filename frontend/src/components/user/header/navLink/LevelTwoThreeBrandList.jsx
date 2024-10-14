import React from "react";

const LevelTwoThreeBrandList = ({ item }) => {
  return (
    <div className="h-full text-sm lg:text-lg">
      <h3 className="font-bold pr-4 mb-4 text-black cursor-pointer">
        {item.label}
      </h3>
      <div className="space-y-2.5">
        {item.items.map((subItem) => (
          <p
            key={subItem.levelThree}
            className="text-[14px] font-semibold text-gray-600 cursor-pointer hover:text-[#ff258b]"
          >
            {subItem.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LevelTwoThreeBrandList;
