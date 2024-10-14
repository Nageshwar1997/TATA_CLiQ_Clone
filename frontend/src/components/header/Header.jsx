import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import Logo from "../../assets/logos/Logo.svg";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Categories from "./mobile/Categories";
import Brands from "./mobile/Brands";

const Header = () => {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);


  return (
    <div className="w-full fixed inset-0 z-50 bg-[#212121] transition-all duration-300 ease-in-out h-[135px] sm:h-[100px]">
      {/* Header Container */}
      <div className="flex items-center justify-between max-w-full sm:max-w-[95%] lg:max-w-[90%] w-full h-[100px] mx-auto gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-6">
        {/* Logo */}
        <img
          className="w-[60px] h-[40px] sm:w-[75px] sm:h-[50px] md:w-[88px] md:h-[55px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />

        {/* Navbar Container */}
        <div className="w-full h-full base:ml-2">
          <TopNavbar />
          <BottomNavbar />
        </div>
      </div>

      {/* Mobile Dropdowns */}
      <div className="sm:hidden max-w-full h-[30px] flex w-full text-white px-2 py-1 gap-6 items-center">
        {/* Categories Dropdown */}
        <div
          className={`w-[50%] flex justify-between items-center px-3 py-1 border border-white rounded-md cursor-pointer transition-colors duration-200 ease-in-out ${
            categoryDropdown ? "bg-white text-black" : ""
          }`}
          onClick={() => {
            setCategoryDropdown(!categoryDropdown);
            setBrandDropdown(false);
          }}
        >
          <span>Categories</span>
          <span>{categoryDropdown ? <FaAngleUp /> : <FaAngleDown />}</span>
        </div>

        {/* Brands Dropdown */}
        <div
          className={`w-[50%] flex justify-between items-center px-3 py-1 border border-white rounded-md cursor-pointer transition-colors duration-200 ease-in-out ${
            brandDropdown ? "bg-white text-black" : ""
          }`}
          onClick={() => {
            setBrandDropdown(!brandDropdown);
            setCategoryDropdown(false);
          }}
        >
          <span>Brand</span>
          <span>{brandDropdown ? <FaAngleUp /> : <FaAngleDown />}</span>
        </div>
      </div>

      {/* Dropdown Content with Animations */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          categoryDropdown ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {categoryDropdown && (
          <div className="w-full bg-white p-4">
            <Categories />
          </div>
        )}
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          brandDropdown ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {brandDropdown && (
          <div className="w-full bg-white p-4">
            <Brands />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
