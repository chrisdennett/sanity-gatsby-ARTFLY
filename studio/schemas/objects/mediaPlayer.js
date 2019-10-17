import React from "react";
//https://www.npmjs.com/package/react-player
import ReactPlayer from "react-player";
import Videocam from "react-icons/lib/md/videocam";

const MediaPlayerPreview = ({ value }) => {
  if (!value.url) {
    return <div>Missing URL</div>;
  }

  return <ReactPlayer url={value.url} />;
};

export default {
  name: "mediaPlayer",
  type: "object",
  title: "Vid",
  icon: Videocam,
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL"
    }
  ],
  preview: {
    select: {
      url: "url"
    },
    component: MediaPlayerPreview
  }
};
