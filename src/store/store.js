import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import sliderReducer from "./sliderSlice";
import productReducer from "./productReducer"; // ✅ bizim reducer

const rootReducer = combineReducers({
  slider: sliderReducer,
  products: productReducer, // ✅ eklendi
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;