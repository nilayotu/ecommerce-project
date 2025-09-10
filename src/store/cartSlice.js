const initialState = {
  items: [],
};

// Action Types
const ADD_TO_CART = "cart/ADD_TO_CART";

// Reducer
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

// Action Creators
export const addToCart = (item) => (dispatch) => {
  // Async işlemler buraya eklenebilir
  dispatch({ type: ADD_TO_CART, payload: item });
};