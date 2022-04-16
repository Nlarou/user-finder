import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../Context/github/GithubContext";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import ReposList from "../components/repos/ReposList";
import { getUser, getUserAndRepos } from "../Context/github/GithubActions";
function UserProfileGithub() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };
    getUserData();
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost btn-lg">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0 rounded-full">
            <div className="shadow-xl card image-full rounded-full w-fit">
              <figure>
                <img src={avatar_url} alt={name} className="rounded-full" />
              </figure>
              <div className="card-body justify-end mx-auto">
                <h2 className="card-title mb-1">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-1 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mr-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  View on Github
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md ">
                    Location
                    <div className="text-lg stat-value ">{location}</div>
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">
                    Website
                    <div className="text-lg stat-value ">
                      <a href={`${blog}`} target="_blank" rel="noreferrer">
                        blog
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">
                    Twitter
                    <div className="text-lg stat-value ">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:4xl">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:4xl">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repo</div>
            <div className="stat-value pr-5 text-3xl md:4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gist</div>
            <div className="stat-value pr-5 text-3xl md:4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
}

export default UserProfileGithub;
