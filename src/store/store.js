import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import sliderReducer from "./sliderReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  slider: sliderReducer,
  products: productReducer, // ✅ eklendi
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;