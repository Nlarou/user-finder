const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
