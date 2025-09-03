import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Menu,
  Heart,
  UserRound,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobil dropdown toggle
  const [isShopOpen, setIsShopOpen] = useState(false); // Desktop Shop dropdown

  return (
    <header className="w-full shadow-md bg-white">
      {/* Desktop Header */}
      <div className="hidden md:flex container mx-auto items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-[#252B42]">
          Bandage
        </Link>

        {/* Desktop Menu */}
        <nav className="flex gap-6 text-[#737373] font-medium relative">
          <Link to="/">Home</Link>

          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsShopOpen(!isShopOpen)}
              className="flex items-center gap-1"
            >
              Shop <ChevronDown className="w-4 h-4" />
            </button>

            {isShopOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md mt-1 rounded-md min-w-[150px] z-10">
                <Link
                  to="/shop/category1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Category 1
                </Link>
                <Link
                  to="/shop/category2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Category 2
                </Link>
                <Link
                  to="/shop/category3"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Category 3
                </Link>
              </div>
            )}
          </div>

          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="flex items-center gap-2 text-[#23A6F0] font-bold"
          >
            <UserRound className="w-5 h-5" />
            Login / Register
          </Link>
          <Search className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          <Heart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
        </div>
      </div>

      {/* Mobile Header */}
<div className="md:hidden flex flex-col bg-white ">
  <div className="flex items-center justify-between px-8 py-6">
    {/* Logo */}
    <Link to="/" className="text-xl font-bold text-[#252B42]">
      Bandage
    </Link>

    {/* Icons */}
    <div className="flex items-center gap-4">
      <UserRound className="w-5 h-5 font-semibold text-[#252B42]" />
      <Search className="w-5 h-5 font-semibold text-[#252B42]" />
      <ShoppingCart className="w-5 h-5 font-semibold text-[#252B42]" />
      {/* Dropdown toggle */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6 font-semibold text-[#252B42]" />
      </button>
    </div>
  </div>

  {/* Mobile Dropdown Content */}
  {isOpen && (
    <div className="flex text-2xl flex-col items-center space-y-8 py-8 px-4 ">
      <Link to="/" className="text-[#737373] hover:text-[#23A6F0] font-semibold">Home</Link>
      <Link to="/product" className="text-[#737373] hover:text-[#23A6F0] font-semibold">Product</Link>
      <Link to="/pricing" className="text-[#737373] hover:text-[#23A6F0] font-semibold">Pricing</Link>
      <Link to="/contact" className="text-[#737373] hover:text-[#23A6F0] font-semibold">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}