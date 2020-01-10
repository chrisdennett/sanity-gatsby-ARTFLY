import React from "react";
import { GoLinkExternal } from "react-icons/go";

const ExternalLink = ({ style, children, to, showExternalLinkIcon = true }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" style={style}>
    {children}{" "}
    {showExternalLinkIcon && (
      <span>
        <GoLinkExternal />{" "}
      </span>
    )}
  </a>
);

export default ExternalLink;
