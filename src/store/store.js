import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import sliderReducer from "./sliderReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const rootReducer = combineReducers({
  slider: sliderReducer,
  products: productReducer, // ✅ eklendi
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;