import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, Heart, UserRound, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobil dropdown toggle

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
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-12">
          <Link to="/login" className="flex items-center gap-2 text-[#23A6F0] font-bold">
            <UserRound className="w-5 h-5" />
            Login / Register
          </Link>
          <Search className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
          <Heart className="w-5 h-5 cursor-pointer text-[#23A6F0]" />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex flex-col bg-white">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <UserRound className="w-5 h-5 text-[#252B42]" />
            <Search className="w-5 h-5 text-[#252B42]" />
            <ShoppingCart className="w-5 h-5 text-[#252B42]" />
            {/* Dropdown toggle */}
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-6 h-6 text-[#252B42]" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Content */}
        {isOpen && (
          <div className="flex flex-col items-center space-y-8 py-8 px-4 text-2xl">
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