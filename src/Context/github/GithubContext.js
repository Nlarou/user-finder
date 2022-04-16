import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //Initial state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    selected: true,
  };
  //Our state and dispatch that will be able to give the current state and dispatch from the reducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //This is the provider for our context
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
