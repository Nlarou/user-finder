import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../Context/github/GithubContext";
import YoutubeContext from "../../Context/youtube/YoutubeContext";
import AlertContext from "../../Context/alert/AlertContext";
import { searchUsers as searchUsersGithub } from "../../Context/github/GithubActions";
import { searchChannels as searchChannelsYoutube } from "../../Context/youtube/YoutubeActions";

export default function UserSearch() {
  const [text, setText] = useState();
  const {
    users,
    dispatch: dispatchGithub,
    selected: githubSelected,
  } = useContext(GithubContext);
  const {
    channels,
    dispatch: dispatchYoutube,
    selected: youtubeSelected,
  } = useContext(YoutubeContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  //Get the channel or the user from the search
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(text);
    if (text === "") {
      setAlert("Please enter something", "warning");
    } else {
      dispatchGithub({ type: "SET_LOADING" });
      dispatchYoutube({ type: "SET_LOADING" });
      if (githubSelected && !youtubeSelected) {
        const users = await searchUsersGithub(text);
        dispatchGithub({ type: "GET_USERS", payload: users });
      } else {
        const users = await searchChannelsYoutube(text);
        dispatchYoutube({ type: "GET_CHANNELS", payload: users });
      }
      setText("");
    }
  };

  //Change the button selection to the github button or the youtube button
  const changeSelection = (e) => {
    e.preventDefault();
    if (githubSelected && !youtubeSelected) {
      dispatchGithub({ type: "SET_SELECTED", payload: false });
      dispatchYoutube({ type: "SET_SELECTED", payload: true });
    } else if (!githubSelected && youtubeSelected) {
      dispatchGithub({ type: "SET_SELECTED", payload: true });
      dispatchYoutube({ type: "SET_SELECTED", payload: false });
    }
    dispatchYoutube({ type: "CLEAR_CHANNELS" });
    dispatchGithub({ type: "CLEAR_USERS" });
  };
  return (
    <div>
      {githubSelected ? (
        <div>
          <button className="btn btn-large btn-warning shadow-md mb-2 mr-2">
            Github
          </button>
          <button
            className="btn btn-large shadow-md mb-2"
            onClick={changeSelection}
          >
            Youtube
          </button>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-large shadow-md mb-2 mr-2"
            onClick={changeSelection}
          >
            Github
          </button>
          <button className="btn btn-large  btn-warning shadow-md mb-2">
            Youtube
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  type="text"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                  type="submit"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 ||
          (channels.length > 0 && (
            <div>
              <button
                className="btn btn-ghost btn-lg"
                onClick={() => {
                  dispatchGithub({ type: "CLEAR_USERS" });
                  dispatchYoutube({ type: "CLEAR_CHANNELS" });
                }}
              >
                Clear
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
