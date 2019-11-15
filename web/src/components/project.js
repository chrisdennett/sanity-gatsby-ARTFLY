import React from "react";
import styled from "styled-components";
// helpers
import { format } from "date-fns";
// comps
import BlockContent from "./block-content";
import ProjectTags from "./project-tags";
import ImageWithPlaceHolder from "./image-with-placeholder";

const Project = props => {
  const { _rawBody, title, mainImage, _rawExcerpt, publishedAt, tags } = props;

  return (
    <PageStyled>
      <MainWrapperStyled>
        <INTRO>
          <h1>{title}</h1>

          {publishedAt && (
            <PROJECT_DATE>{format(new Date(publishedAt), "MMMM Do YYYY")}</PROJECT_DATE>
          )}

          <EXCERPT>{_rawExcerpt && <BlockContent blocks={_rawExcerpt || []} />}</EXCERPT>

          {tags && tags.length > 0 && (
            <TAGS_HOLDER>
              <ProjectTags tags={tags} />
            </TAGS_HOLDER>
          )}
        </INTRO>

        {mainImage && (
          <MainImageHolderStyled>
            <ImageWithPlaceHolder image={mainImage} maxWidth={960} />
          </MainImageHolderStyled>
        )}

        {/* MAIN CONTENT */}
        <MainContentStyled>
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
        </MainContentStyled>
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
`;

export const MainWrapperStyled = styled.div`
  /* background: blue; */
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const INTRO = styled.aside`
  padding: 0 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    font-size: 3em;
    text-align: center;
    line-height: 1em;
  }
`;

export const EXCERPT = styled.div`
  max-width: 800px;
  padding-top: 30px;
  margin-bottom: 50px;
  font-size: 1.5em;
`;

export const TAGS_HOLDER = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  border: rgba(0, 0, 0, 0.1) solid 1px;

  div {
    margin: 15px;
  }
`;

const PROJECT_DATE = styled.div`
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
`;

export const MainContentStyled = styled.div`
  padding: 0 2rem;
  flex: 1;
  align-items: flex-start;

  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 850px;
    margin: 0 auto;
    line-height: 1.8rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: 1rem;
    padding-bottom: 0;
  }

  p {
    padding: 10px 0 10px 0;
  }

  ul {
    padding-bottom: 10px;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`;
