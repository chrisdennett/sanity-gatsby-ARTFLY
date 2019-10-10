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

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const MainContentStyled = styled.div`
  /* background: yellow; */
  max-width: 850px;
  padding: 0 2rem;
  flex: 1;
  align-items: flex-start;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const SidePanelStyled = styled.aside`
  background: white;
  min-width: 170px;
  padding: 15px;
  border-radius: 10px;
  border: rgba(0, 0, 0, 0.08) 1px solid;
  margin-right: 1rem;
  align-self: flex-start;
`;

const ProjectDateStyled = styled.div`
  font-size: 12px;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;
