import React from "react";
import styled from "styled-components";
// helpers
import { format } from "date-fns";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// comps
import BlockContent from "./block-content";
import Container from "../containers/page-layout/page-container";
import ProjectTags from "./project-tags";

const Project = props => {
  const { _rawBody, title, mainImage, publishedAt, tags } = props;

  return (
    <article>
      {mainImage && mainImage.asset && (
        <MainImageHolderStyled>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </MainImageHolderStyled>
      )}
      <Container>
        {/* MAIN CONTENT */}
        <MainContentStyled>
          <h1>{title}</h1>
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
        </MainContentStyled>

        {/* SIDE PANEL */}
        <SidePanelStyled>
          {publishedAt && (
            <ProjectDateStyled>{format(new Date(publishedAt), "MMMM Do YYYY")}</ProjectDateStyled>
          )}
          <ProjectTags tags={tags} />
        </SidePanelStyled>
      </Container>
    </article>
  );
};

export default Project;

//
// STYLES
//
export const MainContentStyled = styled.div``;

const SidePanelStyled = styled.aside`
  margin-top: 25px;
`;

const ProjectDateStyled = styled.div`
  font-size: 12px;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const MainImageHolderStyled = styled.div`
  position: relative;
  background: #eee;
  padding-bottom: calc(9 / 16 * 100%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;
