import React, { useState } from "react";
import { Link } from "react-router-dom"; // yönlendirme sadece menü linkleri için
import { ShoppingCart, Search, Menu, Heart, UserRound } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logoutUserThunk } from "../store/thunks/clientThunks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobil menü
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search bar
  const [query, setQuery] = useState(""); // Input state

const cartCount = useSelector((state) => state.shoppingCart.cart.length);
const wishlistCount = useSelector((state) => state.wishlist?.items?.length || 0);
const user = useSelector((state) => state.client.user);

const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Search:", query); // sadece console.log
      setIsSearchOpen(false);
      setQuery("");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

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
          <Link to="/aboutUs">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/team">Team</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-12 text-[#23A6F0]">
          {user ? (
            <div className="flex items-center gap-3">
              <Gravatar email={user.email} size={32} className="rounded-full" />
              <span className="font-bold text-[#252B42]">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-bold">
              <UserRound className="w-5 h-5" />
              <Link to="/auth">Login / Register</Link>
            </div>
          )}

          {/* Search toggle */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5 cursor-pointer" />
          </button>

          {/* Cart */}
          <div className="relative flex items-center gap-1">
            <ShoppingCart className="w-5 h-5 text-[#23A6F0]" />
            {cartCount > 0 && (
              <span className="text-sm text-[#23A6F0] font-semibold">
                {cartCount}
              </span>
            )}
          </div>

          {/* Wishlist */}
          <div className="relative flex items-center">
            <Heart className="w-5 h-5 text-[#23A6F0]" />
            {wishlistCount > 0 && (
              <span className="text-sm text-[#23A6F0] font-semibold">
                {wishlistCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Search Bar */}
      {isSearchOpen && (
        <div className="hidden md:block bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="flex max-w-xl mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 border rounded-l-md outline-none"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white px-6 rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="md:hidden flex flex-col bg-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold text-[#252B42]">
            Bandage
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-[#252B42]" />
          </button>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="flex flex-col items-center space-y-8 py-8 px-4 text-lg">
            {/* Navigation Links */}
            <div className="flex text-2xl flex-col items-center space-y-6">
              <Link to="/" className="text-[#737373] hover:text-[#23A6F0]">
                Home
              </Link>
              <Link to="/shop" className="text-[#737373] hover:text-[#23A6F0]">
                Shop
              </Link>
              <Link to="/about" className="text-[#737373] hover:text-[#23A6F0]">
                About
              </Link>
              <Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">
                Blog
              </Link>
              <Link to="/contact" className="text-[#737373] hover:text-[#23A6F0]">
                Contact
              </Link>
              <Link to="/pages" className="text-[#737373] hover:text-[#23A6F0]">
                Pages
              </Link>
            </div>

            {/*Mobile user info */}
            {user ? (
              <div className="flex flex-col items-center gap-3 text-[#252B42]">
                <Gravatar email={user.email} size={48} className="rounded-full" />
                <span className="font-bold">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-red-500 text-sm hover:underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-[#23A6F0]">
                <UserRound className="w-8 h-8" />
                <Link to="/auth" className="text-2xl">Login / Register</Link>
              </div>
            )}

            {/* Search, Cart, Wishlist */}
            <div className="flex flex-col items-center gap-8 text-[#23A6F0]">
              {/* Search */}
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="w-8 h-8" />
              </button>

              {/* Cart */}
              <div className="relative flex items-center gap-2">
                <ShoppingCart className="w-8 h-8 text-[#23A6F0]" />
                {cartCount > 0 && (
                  <span className="text-lg text-[#23A6F0] font-semibold">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* Wishlist */}
              <div className="relative flex items-center gap-2">
                <Heart className="w-8 h-8 text-[#23A6F0]" />
                {wishlistCount > 0 && (
                  <span className="text-lg text-[#23A6F0] font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden bg-gray-50 py-3 px-4">
            <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 border rounded-l-md outline-none"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white px-6 rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}