import React from "react";
import Gallery from "./gallery";
// import Figure from "./figure";
import MediaPlayer from "./mediaPlayer";
import TwitterPost from "./twitterPost";
import FacebookPost from "./facebookPost";
import InternalLink from "./internal-link";
import ExternalLink from "./externalLink";
import { Link } from "gatsby";

const serializers = {
  types: {
    gallery: Gallery,
    // figure: Figure,
    mediaPlayer: MediaPlayer,
    twitter: TwitterPost,
    facebook: FacebookPost
    // internalLink: InternalLink
  },
  marks: {
    internalLink: InternalLink,
    link: ({ mark, children }) => {
      if (mark.blank) {
        return <ExternalLink to={mark.href}>{children}</ExternalLink>;
      } else {
        return <Link to={mark.href}>{children}</Link>;
      }
    }
  }
};

export default serializers;
