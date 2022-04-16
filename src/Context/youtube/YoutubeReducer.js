const youtubeReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHANNELS":
      return {
        ...state,
        channels: action.payload,
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

    case "CLEAR_CHANNELS":
      return {
        ...state,
        channels: [],
      };
    case "GET_CHANNELS":
      return {
        ...state,
        channels: action.payload,
        loading: false,
      };
    case "GET_CHANNEL_AND_VIDEOS":
      return {
        ...state,
        channel: action.payload.channel,
        videos: action.payload.videos,
        loading: false,
      };

    default:
      return state;
  }
};

export default youtubeReducer;
