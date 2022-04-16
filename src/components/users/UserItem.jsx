import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GithubContext from "../../Context/github/GithubContext";

function UserItem({ user: { login, avatar_url } }) {
  const { selected: githubSelected } = useContext(GithubContext);
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          {console.log(avatar_url, login)}
          <div className="avatar">
            <div className="rounded-full shadow h-14 w-14">
              <img className="" src={avatar_url} alt={login} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-50"
            to={
              githubSelected
                ? `/github-user/${login}`
                : `/youtube-user/${login}`
            }
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
