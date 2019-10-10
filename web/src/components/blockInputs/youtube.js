import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

export default ({ node }) => {
  if (!node.url) {
    return null;
  }

  const id = getYouTubeId(node.url);
  return <YouTube videoId={id} />;
};
