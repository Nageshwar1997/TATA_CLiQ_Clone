import React from "react";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center text-sm font-semibold px-4 text-white bg-black w-full h-[40px]">
      <div className="cursor-pointer">Tata CliQ Luxury</div>
      <div className="flex space-x-8">
        <p className="cursor-pointer">CLiQ Cash</p>
        <p className="cursor-pointer">Gift Card</p>
        <p className="cursor-pointer">CLiQ Care</p>
        <p className="cursor-pointer">Track Orders</p>
        <p className="cursor-pointer">Sign in/Sign Up</p>
      </div>
    </div>
  );
};

export default TopNavbar;
