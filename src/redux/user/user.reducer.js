const INITIAL_STATE = {
  currentUser: null,
  count: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        count: action.payload.count,
        currentUser: action.payload.username,
      };
    default:
      return state;
  }
};

export default userReducer;
