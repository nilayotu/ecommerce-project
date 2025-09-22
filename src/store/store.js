// src/store/store.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

// Reducer'larını import et
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import catalogReducer from "./reducers/catalogReducer";
import sliderReducer from "./reducers/sliderReducer";
import categoryReducer from "./reducers/categoryReducer";

// Reducer'ları birleştir
const rootReducer = combineReducers({
  slider: sliderReducer,
  client: clientReducer,
  products: productReducer,
  catalog: catalogReducer,
  shoppingCart: shoppingCartReducer,
  category: categoryReducer,
});

// Middleware ekle (thunk + logger)
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;