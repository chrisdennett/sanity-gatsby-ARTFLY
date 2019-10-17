import React from "react";
import Gallery from "./gallery";
// import Figure from "./figure";
import YouTube from "./youtube";
import TwitterPost from "./twitterPost";
import InternalLink from "./internal-link";

const serializers = {
  types: {
    gallery: Gallery,
    // figure: Figure,
    youtube: YouTube,
    twitter: TwitterPost
    // internalLink: InternalLink
  },
  marks: {
    internalLink: InternalLink,
    link: ({ mark, children }) => {
      if (mark.blank) {
        return (
          <a href={mark.href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      } else {
        return <a href={mark.href}>{children}</a>;
      }
    }
  }
};

export default serializers;
