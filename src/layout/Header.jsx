import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, Heart, UserRound, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-[#252B42]">
          Bandage
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-[#737373] font-medium relative">
  <Link to="/">Home</Link>

  {/* Shop dropdown */}
  <div className="relative">
    <button
      onClick={() => setIsShopOpen(!isShopOpen)}
      className="flex items-center gap-1"
    >
      Shop <ChevronDown className="w-4 h-4" />
    </button>

    {isShopOpen && (
      <div className="absolute top-full left-0 bg-white shadow-md mt-1 rounded-md min-w-[150px] z-10">
        <Link to="/shop/category1" className="block px-4 py-2 hover:bg-gray-100">Category 1</Link>
        <Link to="/shop/category2" className="block px-4 py-2 hover:bg-gray-100">Category 2</Link>
        <Link to="/shop/category3" className="block px-4 py-2 hover:bg-gray-100">Category 3</Link>
      </div>
    )}
        </div>

          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
         </nav>

        {/* Right Side */}
          <div className="hidden md:flex items-center gap-12">
          <Link to="/login" className="flex items-center gap-2 text-[#23A6F0] font-bold">
          <UserRound className="w-5 h-5" />
          Login / Register
         </Link>
          <Search className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          <Heart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-3 space-y-2">
          <Link to="/" className="block text-[#737373]">Home</Link>
          <Link to="/shop" className="block">Shop</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/blog" className="block">Blog</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/pages" className="block">Pages</Link>
          <Link to="/login" className="block text-[#23A6F0] font-semibold">
            Login / Register
          </Link>
        </div>
      )}
    </header>
  );
}