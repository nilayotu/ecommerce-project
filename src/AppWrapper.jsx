import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import App from "./App";
import { verifyToken } from "./store/thunks/clientThunks";

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return <App />;
};

export default AppWrapper;