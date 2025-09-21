import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppWrapper from "./AppWrapper"; // App yerine AppWrapper
import store from "./store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);