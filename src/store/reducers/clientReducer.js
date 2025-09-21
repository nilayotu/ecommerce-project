// Action Types
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

// Initial State
const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
};

// Reducer
export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

// ✅ Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const clearUser = () => ({ type: CLEAR_USER });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });