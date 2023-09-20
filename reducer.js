export const initialState = {
  searchTerm: "",
  isTyping: true,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_IS_TYPING":
      return { ...state, isTyping: action.payload };
    default:
      return state;
  }
};
