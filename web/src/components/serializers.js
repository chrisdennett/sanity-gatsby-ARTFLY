import React from "react";
import Figure from "./figure";
import YouTube from "./youtube";
import InternalLink from "./internal-link";

const serializers = {
  types: {
    figure: Figure,
    youtube: YouTube
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
