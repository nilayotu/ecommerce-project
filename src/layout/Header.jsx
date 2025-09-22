import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, Heart, UserRound } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logoutUserThunk } from "../store/thunks/clientThunks";
import { fetchCategoriesThunk } from "../store/thunks/categoryThunks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const cartCount = useSelector((state) => state.shoppingCart.cart.length);
  const wishlistCount = useSelector(
    (state) => state.wishlist?.items?.length || 0
  );
  const user = useSelector((state) => state.client.user);

  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Search:", query);
      setIsSearchOpen(false);
      setQuery("");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  // Rating'e göre top 5 kategori
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  // Gender mapping
  const getGenderPath = (g) => (g === "k" ? "kadin" : "erkek");

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
          <div className="relative group">
            <span className="hover:text-[#23A6F0] cursor-pointer">Shop</span>
            <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-2 gap-12 bg-white shadow-lg p-8 w-[400px] z-50">
              {/* Women */}
              <div>
                <h3 className="font-bold text-[#252B42] mb-6">Women</h3>
                <ul className="flex flex-col gap-4">
                  {categories
                    .filter((cat) => cat.gender === "k")
                    .map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/shop/${getGenderPath(cat.gender)}/${cat.title.toLowerCase()}/${cat.id}`}
                          className="hover:text-[#23A6F0] font-bold"
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Men */}
              <div>
                <h3 className="font-bold text-[#252B42] mb-6">Men</h3>
                <ul className="flex flex-col gap-4">
                  {categories
                    .filter((cat) => cat.gender === "e")
                    .map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/shop/${getGenderPath(cat.gender)}/${cat.title.toLowerCase()}/${cat.id}`}
                          className="hover:text-[#23A6F0] font-bold"
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

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

              {/* Mobile Shop with categories */}
              <div className="flex flex-col items-center">
                <span className="text-[#737373] font-bold">Shop</span>
                <div className="flex gap-12 mt-4">
                  {/* Women */}
                  <div>
                    <h3 className="font-bold text-[#252B42] mb-2 text-center">
                      Women
                    </h3>
                    <ul className="flex flex-col gap-1">
                      {categories
                        .filter((cat) => cat.gender === "k")
                        .map((cat) => (
                          <li key={cat.id}>
                            <Link
                              to={`/shop/${getGenderPath(cat.gender)}/${cat.title.toLowerCase()}/${cat.id}`}
                              className="text-[#737373] hover:text-[#23A6F0] font-bold"
                            >
                              {cat.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Men */}
                  <div>
                    <h3 className="font-bold text-[#252B42] mb-2 text-center">
                      Men
                    </h3>
                    <ul className="flex flex-col gap-1">
                      {categories
                        .filter((cat) => cat.gender === "e")
                        .map((cat) => (
                          <li key={cat.id}>
                            <Link
                              to={`/shop/${getGenderPath(cat.gender)}/${cat.title.toLowerCase()}/${cat.id}`}
                              className="text-[#737373] hover:text-[#23A6F0] font-bold"
                            >
                              {cat.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/aboutUs" className="text-[#737373] hover:text-[#23A6F0]">
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
              <Link to="/team" className="text-[#737373] hover:text-[#23A6F0]">
                Team
              </Link>
            </div>

            {/* Mobile user info */}
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
                <Link to="/auth" className="text-2xl">
                  Login / Register
                </Link>
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