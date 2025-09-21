import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { addToCart } from "../../store/reducers/shoppingCartReducer";
import { addToWishlist } from "../../store/wishlistSlice";

export default function ProductDetailsById() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.catalog.products.find((p) => p.id === parseInt(id))
  );
  const user = useSelector((state) => state.client.user);

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        Ürün bulunamadı.
      </div>
    );
  }

  const images = [product.image, "/assets/cheese.jpg", "/assets/werthers.jpg"];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    if (!user || !user.token) {
      history.push("/auth");
      return;
    }

    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-6xl mx-auto b-g-[#FAFAFA] py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Sol kısım - ürün görselleri */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <img
            src={images[selectedIndex]}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-lg shadow"
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-[#737373] z-30"
          >
            <ChevronLeft size={120} strokeWidth={1} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-[#737373] z-30"
          >
            <ChevronRight size={120} strokeWidth={1} />
          </button>
        </div>
        <div className="flex gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setSelectedIndex(idx)}
              className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                selectedIndex === idx ? "border-blue-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Sağ kısım - ürün bilgileri */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-[#252B42]">
          {product.title}
        </h1>

        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              size={18}
              className={
                idx < 4
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-500">10 Reviews</span>
        </div>

        <div className="text-2xl text-[#252B42] font-bold">
          ${product.price}
        </div>
        <p className="text-[#737373] font-semibold">
          Availability:{" "}
          <span className="text-[#23A6F0] font-bold">In Stock</span>
        </p>

        <p className="text-[#858585]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        <div className="flex gap-3 mt-2">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="w-8 h-8 rounded-full border cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-[#23A6F0] text-white font-bold rounded-lg transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <Heart />
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center">
            <Eye />
          </button>
        </div>
      </div>
    </div>
  );
}