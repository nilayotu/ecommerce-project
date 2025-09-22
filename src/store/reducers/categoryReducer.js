const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/fetchStart":
      return { ...state, loading: true, error: null };
    case "categories/fetchSuccess":
      return { ...state, loading: false, categories: action.payload };
    case "categories/fetchError":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;