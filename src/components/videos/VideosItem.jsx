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
      </div>
    </div>
  );
}

VideosItem.prototype = {
  video: PropTypes.object.isRequired,
};
export default VideosItem;
