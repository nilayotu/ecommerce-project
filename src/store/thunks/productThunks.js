import api from "../api";
import { setProductList, setTotal, setFetchState } from "../reducers/productReducer";

export const fetchProductsThunk = () => async (dispatch, getState) => {
  const { limit, offset, filter } = getState().products;

  dispatch(setFetchState("FETCHING"));
  try {
    const response = await api.get("/products", {
      params: {
        limit,
        offset,
        q: filter || "", // filter varsa ekle
      },
    });

    // API response formatı { products: [...], total: number }
    dispatch(setProductList(response.data.products));
    dispatch(setTotal(response.data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (err) {
    console.error("Failed to fetch products:", err.message);
    dispatch(setFetchState("FAILED"));
  }
};