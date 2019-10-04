import React from "react";
// import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";

import styles from "./project.module.css";

function Tag(props) {
  const { _rawBio, name, image } = props;

  return (
    <article className={styles.root}>
      {image && image.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={image.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          {/* MAIN CONTENT */}
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{name}</h1>
            {_rawBio && <BlockContent blocks={_rawBio || []} />}
          </div>
        </div>
      </Container>
    </article>
  );
}

export default Tag;
