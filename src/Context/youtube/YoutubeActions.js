import axios from "axios";
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_API;
const YOUTUBE_TOKEN = process.env.REACT_APP_YOUTUBE_ACCESS_TOKEN;

const youtube = axios.create({
  baseURL: YOUTUBE_URL,
});

// search channels
export const searchChannels = async (text) => {
  const channelList = await (
    await youtube.get(
      `/search?part=snippet&q=${text}&maxResults=25&type=channel&key=${YOUTUBE_TOKEN}`
    )
  ).data.items;
  return channelList;
};

//Search the channel by username and return the channel id
const searchChannelIdByUsername = async (username) => {
  const channel = await (
    await youtube.get(
      `/search?part=snippet&q=${username}&type=channel&key=${YOUTUBE_TOKEN}`
    )
  ).data.items[0];
  return channel.id.channelId;
};

// get channel and videos by username
export const getChannelAndVideos = async (username) => {
  const channelId = await searchChannelIdByUsername(username);
  const [channel, videos] = await Promise.all([
    youtube.get(
      `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_TOKEN}`
    ),
    youtube.get(
      `/search?channelId=${channelId}&part=snippet,id&order=date&maxResults=20&key=${YOUTUBE_TOKEN}`
    ),
  ]);
  return {
    channel: channel.data.items[0],
    videos: videos.data.items,
  };
};

//Create function that return the user followers
export const getUserFollowers = async (username) => {
  const response = await youtube.get(`/users/${username}/followers`);
  return response.data;
};
