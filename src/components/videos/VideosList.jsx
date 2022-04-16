import React from "react";
import VideosItem from "./VideosItem";
import PropTypes from "prop-types";

function VideosList({ videos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Recent Videos</h2>
        {videos.map((video) =>
          video.id.kind === "youtube#video" ? (
            <VideosItem key={video.id.videoId} video={video} />
          ) : null
        )}
      </div>
    </div>
  );
}

VideosList.prototype = {
  repos: PropTypes.array.isRequired,
};
export default VideosList;
