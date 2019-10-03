import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import styles from "./figure.module.css";

export default ({ node }) => {
  if (!node.asset) {
    return null;
  }
  // if (!node.asset._ref) return null;
  // const fluidProps = getFluidGatsbyImage(node.asset._ref, { maxWidth: 675 }, clientConfig.sanity);

  const fluidProps = getFluidGatsbyImage(node.asset, { maxWidth: 675 }, clientConfig.sanity);

  // const { assetId, extension, metadata } = node.asset;
  // const { height, width } = metadata.dimensions;
  // const ref = `image-${assetId}-${width}x${height}-${extension}`;

  // NOTE: Reason this needed to be adapted
  // In src/templates/project.js
  // in the graphql _rawBody bit I've added:
  // _rawBody(resolveReferences: { maxDepth: 5 })
  // to get link slugs, but this gives me the full ref for the image.
  // there's probably a way to not get the full image data

  return (
    <figure className={styles.root}>
      <Img fluid={fluidProps} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  );
};
