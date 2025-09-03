import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import sliderReducer from "./sliderSlice";

const rootReducer = combineReducers({
  slider: sliderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;