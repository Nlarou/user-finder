import { createContext, useReducer } from "react";
import youtubeReducer from "./YoutubeReducer";

const youtubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const initialState = {
    channels: [],
    channel: {},
    videos: [],
    loading: false,
    selected: false,
  };
  //Our state and dispatch that will be able to give the current state and dispatch from the reducer
  const [state, dispatch] = useReducer(youtubeReducer, initialState);

  return (
    <youtubeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </youtubeContext.Provider>
  );
};

export default youtubeContext;
