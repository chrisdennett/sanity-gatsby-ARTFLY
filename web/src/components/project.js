import React from "react";
import styled from "styled-components";
// helpers
import { format } from "date-fns";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// comps
import BlockContent from "./block-content";
import ProjectTags from "./project-tags";

const Project = props => {
  const { _rawBody, title, mainImage, publishedAt, tags } = props;

  return (
    <PageStyled>
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
      <MainWrapperStyled>
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
      </MainWrapperStyled>
    </PageStyled>
  );
};

export default Project;

//
// STYLES
//
export const PageStyled = styled.article`
  padding: 0 1rem;
`;

export const MainImageHolderStyled = styled.div`
  margin-bottom: 40px;

  img {
    margin: 0 auto;
  }
`;

export const MainWrapperStyled = styled.div`
  /* background: blue; */
  display: flex;
  justify-content: center;
`;
export const MainContentStyled = styled.div`
  /* background: yellow; */
  max-width: 960px;
  flex: 1;
`;

const SidePanelStyled = styled.aside`
  /* background: green; */
`;

const ProjectDateStyled = styled.div`
  font-size: 12px;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;
