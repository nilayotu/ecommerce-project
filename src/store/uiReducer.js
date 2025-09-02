const TOGGLE_MENU = "TOGGLE_MENU";
const CLOSE_MENU = "CLOSE_MENU";

// action creators
export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const closeMenu = () => ({ type: CLOSE_MENU });

// initial state
const initialState = {
  isMenuOpen: false,
};

// reducer
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case CLOSE_MENU:
      return { ...state, isMenuOpen: false };
    default:
      return state;
  }
};