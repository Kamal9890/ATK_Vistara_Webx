import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import "@fontsource/kalnia"; // npm install @fontsource/kalnia

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-4 flex items-center justify-between lg:px-10 relative">
      {/* Brand */}
      <div
        className="text-3xl lg:text-4xl font-normal text-rose-700 tracking-wide"
        style={{ fontFamily: "Kalnia, serif" }}
      >
        <Link to="/">Atulya Karigari</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-gray-800 font-medium text-lg">
        <li><Link to="/handloom">Handloom</Link></li>
        <li><Link to="/occasion">Shop by Occasion</Link></li>
        <li><Link to="/stories">Craft Stories</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Desktop Search */}
      <div className="hidden md:flex items-center bg-[#fde4e4] rounded-full px-4 py-2 w-80 border border-rose-200">
        <Search size={18} className="text-rose-600" />
        <input
          type="text"
          placeholder="Search for sarees..."
          className="bg-transparent outline-none px-2 w-full text-base font-medium placeholder-[#8b8b8b]"
          style={{ fontFamily: "Kalnia, serif" }}
        />
      </div>

      {/* Icons */}
      <div className="flex gap-5 items-center relative">
        <Heart className="text-gray-600 cursor-pointer hover:text-rose-600" size={24} />
        <ShoppingCart className="text-gray-600 cursor-pointer hover:text-rose-600" size={24} />

        {/* Profile Menu */}
        <div className="relative">
          <User
            className="text-gray-600 cursor-pointer hover:text-rose-600"
            size={24}
            onClick={() => setProfileOpen(!profileOpen)}
          />

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setProfileOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setProfileOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
          <Menu size={28} className="text-gray-700" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 lg:hidden">
          <div className="bg-white w-72 h-full p-5 shadow-md relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Search in Drawer */}
            <div className="flex items-center bg-[#fde4e4] rounded-full px-3 py-2 mb-6 border border-rose-200">
              <Search size={18} className="text-rose-600" />
              <input
                type="text"
                placeholder="Search for sarees..."
                className="bg-transparent outline-none px-2 w-full text-base font-medium placeholder-[#8b8b8b]"
                style={{ fontFamily: "Kalnia, serif" }}
              />
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-4 text-gray-800 font-medium text-lg">
              <li><Link to="/handloom" onClick={() => setMenuOpen(false)}>Handloom</Link></li>
              <li><Link to="/occasion" onClick={() => setMenuOpen(false)}>Shop by Occasion</Link></li>
              <li><Link to="/stories" onClick={() => setMenuOpen(false)}>Craft Stories</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
