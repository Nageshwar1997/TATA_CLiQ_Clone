import React from "react";
import Logo from "../../../assets/customer/logos/Logo.svg";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import SearchBar from "./navLink/SearchBar";

const Header = () => {
  const handleSearchInput = () => {};
  return (
    <div className="w-full h-[130px] md:h-[100px] fixed inset-0 z-100 bg-[#212121] transition-all duration-200 ease-normal transform translate-z-0">
      <div className="flex items-center justify-between max-w-[100%] sm:max-w-[95%] lg:max-w-[90%] w-full h-[100px] mx-auto gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-6">
        {/* Logo */}
        <img
          className="w-[60px] h-[40px] sm:w-[75px] sm:h-[50px] md:w-[88px] md:h-[55px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />

        {/* Navbar Container */}
        <div className="w-full h-full base:ml-2">
          {/* TopNavbar and BottomNavbar - Ensure these components are responsive as well */}
          <TopNavbar />
          <BottomNavbar />
        </div>
      </div>
      {/* <div className="md:hidden max-w-[100%] h-[25px] flex w-full bg-[#4A4A4A] rounded-md px-2 sm:px-4 py-1 gap-1 sm:gap-2 items-center">
        <SearchBar handleSearchInput={handleSearchInput} />
      </div> */}
    </div>
  );
};

export default Header;
