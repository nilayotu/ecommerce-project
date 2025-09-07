const initialState = {
  products: [
    {
      id: 1,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/bleach.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/cheese.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/popular-product-2.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/werthers.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/bleach.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/cheese.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/popular-product-2.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 8,
      title: "Graphic Design",
      category: "English Department",
      oldPrice: 16.48,
      price: 6.48,
      image: "/assets/werthers.jpg",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ],
  currentPage: 1,
  itemsPerPage: 8,
  viewMode: "grid", // grid | list
  sortBy: "popularity", // popularity | lowToHigh | highToLow | newest
};

// Action types
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_VIEW_MODE = "SET_VIEW_MODE";
const SET_SORT_BY = "SET_SORT_BY";

// Reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload,
      };
    case SET_SORT_BY: {
      let sortedProducts = [...state.products];
      if (action.payload === "lowToHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (action.payload === "highToLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (action.payload === "newest") {
        sortedProducts.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        sortBy: action.payload,
        products: sortedProducts,
      };
    }
    default:
      return state;
  }
}

// Action creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setViewMode = (mode) => ({
  type: SET_VIEW_MODE,
  payload: mode,
});

export const setSortBy = (sortType) => ({
  type: SET_SORT_BY,
  payload: sortType,
});