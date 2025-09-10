const initialState = {
  items: [],
};

// Action Types
const ADD_TO_WISHLIST = "wishlist/ADD_TO_WISHLIST";

// Reducer
export default function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

// Action Creators
export const addToWishlist = (item) => (dispatch) => {

  dispatch({ type: ADD_TO_WISHLIST, payload: item });
};