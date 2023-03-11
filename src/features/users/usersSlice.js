const initialState = {
  users: [],
  // new key
  // userCount: 0
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      console.log("adding ", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
        // new key add
        // userCount: [state.userCount + 1]
      };

    default:
      return state;
  }
}

export default usersReducer;
