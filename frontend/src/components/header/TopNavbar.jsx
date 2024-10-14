import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBell, HiOutlineCurrencyRupee } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";

const TopNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!isMoreDropdownOpen);
  };

  return (
    <div className="relative flex justify-between items-center text-xs sm:text-sm font-semibold px-2 sm:px-4 text-white bg-black w-full h-[40px] shadow-md">
      {/* Left Section - Tata CliQ Luxury */}
      <div className="cursor-pointer transition hover:opacity-80 text-[11px] md:text-xs lg:text-sm">
        Tata CliQ Luxury
      </div>

      <div
        className="sm:hidden relative cursor-pointer transition hover:opacity-80 text-lg"
        onClick={toggleMoreDropdown}
        onMouseEnter={() => setMoreDropdownOpen(true)}
        onMouseLeave={() => setMoreDropdownOpen(false)}
        aria-haspopup="true"
        aria-expanded={isMoreDropdownOpen}
      >
        <CgMoreO />
      </div>

      {/* Right Section - Nav Items */}
      <div className="flex space-x-4 items-center sm:space-x-8 text-[11px] md:text-xs lg:text-sm">
        {/* Smaller screens may require fewer space between items */}

        <div className="hidden sm:block cursor-pointer transition hover:opacity-80">
          CLiQ Cash
        </div>
        <div className="hidden sm:block cursor-pointer transition hover:opacity-80">
          Gift Card
        </div>
        <div className="hidden sm:block cursor-pointer transition hover:opacity-80">
          CLiQ Care
        </div>
        <div className="hidden sm:block cursor-pointer transition hover:opacity-80">
          Track Orders
        </div>

        {/* Dropdown Menu for Login/Register */}
        <div className="relative">
          <p
            className="cursor-pointer transition hover:opacity-80"
            onClick={toggleDropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            Login/Register
          </p>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className="absolute z-50 top-7 right-0 w-[11rem] sm:w-[13rem] py-2 bg-white text-black shadow-lg rounded-lg transition-transform duration-200"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <TiArrowSortedUp className="absolute top-[-18px] right-8 sm:right-10 text-3xl text-white" />
              <div className="flex flex-col space-y-2 px-2 sm:px-4">
                <div className="py-3 cursor-pointer bg-red-600 text-white rounded-lg text-center hover:bg-red-700 transition text-[14px] sm:text-[16px]">
                  Login / Register
                </div>
                <div className="px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 text-[13px] sm:text-[15px]">
                  <FaRegUserCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>My Account</span>
                </div>
                <div className="px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 text-[13px] sm:text-[15px]">
                  <LuShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Order History</span>
                </div>
                <div className="px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 text-[13px] sm:text-[15px]">
                  <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>My Wishlist</span>
                </div>
                <div className="px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 text-[13px] sm:text-[15px]">
                  <HiOutlineBell className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Alerts & Coupons</span>
                </div>
                <div className="px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 text-[13px] sm:text-[15px]">
                  <MdOutlineCardGiftcard className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Gift Card</span>
                </div>
                <div className="px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 text-[13px] sm:text-[15px]">
                  <HiOutlineCurrencyRupee className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>CLiQ Cash</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* More Dropdown */}
        {isMoreDropdownOpen && (
          <div
            className="absolute z-50 top-10 left-[28%] w-[7rem] sm:w-[13rem] py-2 bg-white text-black shadow-lg rounded-lg transition-transform duration-200"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <TiArrowSortedUp className="absolute top-[-18px] left-6 sm:right-10 text-3xl text-white" />
            <div className="flex flex-col space-y-2 px-2 sm:px-4">
              <p className="py-0.5 cursor-pointer rounded-lg hover:bg-gray-100 transition">
                CLiQ Cash
              </p>
              <p className="py-0.5 cursor-pointer rounded-lg hover:bg-gray-100 transition">
                Gift Card
              </p>
              <p className="py-0.5 cursor-pointer rounded-lg hover:bg-gray-100 transition">
                CLiQ Care
              </p>
              <p className="py-0.5 cursor-pointer rounded-lg hover:bg-gray-100 transition">
                Track Orders
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
