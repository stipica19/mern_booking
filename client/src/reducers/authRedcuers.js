const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !!action.payload,
        user: action.payload,
      };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
