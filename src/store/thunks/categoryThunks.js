import api from "../api";

// thunk
export const fetchCategoriesThunk = () => async (dispatch) => {
  dispatch({ type: "categories/fetchStart" });
  try {
    const response = await api.get("/categories");
    dispatch({ type: "categories/fetchSuccess", payload: response.data });
  } catch (error) {
    dispatch({
      type: "categories/fetchError",
      payload: error.message || "Something went wrong",
    });
  }
};