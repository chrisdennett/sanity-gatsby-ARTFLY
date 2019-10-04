import { format } from "date-fns";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";

import styles from "./project.module.css";
import ProjectTags from "./project-tags";

function Project(props) {
  const { _rawBody, title, mainImage, publishedAt, tags } = props;

  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          {/* MAIN CONTENT */}
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>

          {/* SIDE PANEL */}
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {format(new Date(publishedAt), "MMMM Do YYYY")}
              </div>
            )}

            <ProjectTags tags={tags} />
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project;
