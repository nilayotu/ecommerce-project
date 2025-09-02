import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { uiReducer } from "./uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;