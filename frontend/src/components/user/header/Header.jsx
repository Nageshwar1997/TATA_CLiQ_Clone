import React from "react";
import Logo from "../../../assets/customer/logos/Logo.svg";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Header = () => {
  return (
    <div className="w-full h-[100px] fixed inset-0 z-100 bg-[#212121] transition-all duration-200 ease-normal transform translate-z-0">
      <header className="flex items-center justify-between max-w-[78%] w-full h-full mx-auto space-x-20">
        <img
          className="w-[88px] h-[55px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        <div className="w-[85%] h-full">
          <TopNavbar />
          <BottomNavbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
