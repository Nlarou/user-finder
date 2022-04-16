import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../Context/github/GithubContext";
import youtubeContext from "../../Context/youtube/YoutubeContext";

export default function UserResults() {
  const {
    users: usersGithub,
    loading: loadingGithub,
    fetchUsers,
  } = useContext(GithubContext);
  const { channels, loading: loadingYoutube } = useContext(youtubeContext);

  if (!loadingGithub || !loadingYoutube) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {usersGithub.length > 0
          ? usersGithub.map((user) => <UserItem key={user.id} user={user} />)
          : channels.map((channel) => (
              <UserItem
                key={channel.id}
                user={{
                  login: channel.snippet.channelTitle,
                  avatar_url: channel.snippet.thumbnails.default.url,
                }}
              />
            ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
