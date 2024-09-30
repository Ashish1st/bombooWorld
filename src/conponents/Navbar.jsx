import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link
        to="/"
        className="logo sm:text-xl text-[15px] uppercase font-[prata]"
      >
        <span>bomboo</span> <span>world</span>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>
        <NavLink to="/Collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About us</p>
        </NavLink>
        <NavLink to="Contact" className="flex flex-col items-center gap-1">
          <p>Contact us</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <div className="search-icon cursor-pointer w-5">
          <i className="ri-search-line"></i>
        </div>
        <div className="profile-icon relative cursor-pointer w-5">
          <i className="ri-user-line"></i>
        </div>
        <div className="cart-icon w-5 relative">
          <NavLink to="/cart" className="ri-shopping-cart-line"></NavLink>
          <p className="absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            9
          </p>
        </div>

        <div className="w-5 cursor-pointer sm:hidden">
          <i onClick={() => setvisible(true)} className="ri-menu-3-line"></i>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="close flex flex-col text-gray-600 overflow-hidden ">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <i className="ri-close-line h-4"></i>
          </div>
          <NavLink
            to="/"
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
          >
            About us
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
