import React from "react";
import { GoLinkExternal } from "react-icons/go";

const ExternalLink = ({ style, children, to, withExternalLinkIcon = true }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" style={style}>
    {children}{" "}
    {withExternalLinkIcon && (
      <span>
        <GoLinkExternal />{" "}
      </span>
    )}
  </a>
);

export default ExternalLink;
