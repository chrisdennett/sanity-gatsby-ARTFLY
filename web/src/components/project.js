import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
// import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";

import styles from "./project.module.css";

function Project(props) {
  const { _rawBody, title, mainImage, publishedAt, tags } = props;

  const people = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("person"));
  const events = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("event"));
  const organisations = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("organisation"));
  const sponsors = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("sponsor"));
  const catetories = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("category"));

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

            {people.length > 0 && <h3>People</h3>}
            {people.map(tag => (
              <div key={tag.name}>{tag.name}</div>
            ))}

            {events.length > 0 && <h3>Events</h3>}
            {events.map(tag => (
              <div key={tag.name}>{tag.name}</div>
            ))}

            {organisations.length > 0 && <h3>Organisations</h3>}
            {organisations.map(tag => (
              <div key={tag.name}>{tag.name}</div>
            ))}

            {sponsors.length > 0 && <h3>Sponsors</h3>}
            {sponsors.map(tag => (
              <div key={tag.name}>{tag.name}</div>
            ))}

            {catetories.length > 0 && <h3>Categories</h3>}
            {catetories.map(tag => (
              <div key={tag.name}>{tag.name}</div>
            ))}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project;
