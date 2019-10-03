import React from "react";
import { Link } from "gatsby";

export default ({ mark, children }) => {
  if (!mark.item || !mark.item.slug) {
    return null;
  }
  const { slug } = mark.item;

  return <Link to={`/${slug.current}`}>{children}</Link>;
};
