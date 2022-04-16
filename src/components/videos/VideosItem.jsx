import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";
function VideosItem({ video: video }) {
  const {
    publishedAt,
    channelId,
    title,
    description,
    thumbnails,
    channelTitle,
  } = video.snippet;

  const video_url = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-title p-2">
        <figure>
          <img
            alt={title}
            src={thumbnails.medium.url}
            className="max-w-screen-md"
          />
        </figure>
        <div>
          <h3 className="text-2xl font-semibold">
            <a href={video_url} target="_blank" rel="noreferrer">
              <FaLink className="inline mr-1" />
              {title}
            </a>
          </h3>
          <p className="mt-3">Published: {publishedAt}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="mb-3">{description}</p>

        {/* <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye />
            <div className="ml-2">{watchers_count}</div>
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" />
            {stargazers_count}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" />
            {forks}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" />
            {open_issues}
          </div>
        </div> */}
      </div>
    </div>
  );
}

VideosItem.prototype = {
  video: PropTypes.object.isRequired,
};
export default VideosItem;
