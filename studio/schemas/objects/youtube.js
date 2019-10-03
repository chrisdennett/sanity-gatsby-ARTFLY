import React from "react";
import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";

const YouTubePreview = ({ value }) => {
  const id = getYouTubeID(value.url);
  //   const youtubeSrc = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    return <div>Missing YouTube URL</div>;
  }

  return <YouTube videoId={id} />;
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
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
    component: YouTubePreview
  }
};
