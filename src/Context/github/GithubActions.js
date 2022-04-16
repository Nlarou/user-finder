import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const reponse = await github.get("/search/users", {
    params,
  });
  return reponse.data.items;
};

// get user and repos
export const getUserAndRepos = async (username) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${username}`),
    github.get(`/users/${username}/repos`),
  ]);
  return {
    user: user.data,
    repos: repos.data,
  };
};

//Create function that return the user followers
export const getUserFollowers = async (username) => {
  const response = await github.get(`/users/${username}/followers`);
  return response.data;
};
