import React from "react";
import Videocam from "react-icons/lib/md/videocam";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TwitterPreview = ({ value }) => {
  const { url } = value;
  const tweetId = url.split("/").pop();

  if (!tweetId) {
    return <div>Missing Tweet URL</div>;
  }

  return <TwitterTweetEmbed tweetId={tweetId} />;
};

export default {
  name: "twitter",
  type: "object",
  title: "Twitter",
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
    component: TwitterPreview
  }
};
