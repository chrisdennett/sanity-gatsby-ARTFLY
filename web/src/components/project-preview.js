import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
// comps
import BlockText from "./block-text";

const ProjectPreview = ({ title, _rawExcerpt, slug, mainImage }) => {
  if (!mainImage) {
    return (
      <ProjectCardStyled to={`/project/${slug.current}`}>
        <ThumbImgHolderStyled>
          <div>
            <img src={"https://via.placeholder.com/400x300.png?text=PHOTO+OR+IT+NEVER+HAPPENED!"} />
          </div>
        </ThumbImgHolderStyled>
        <h3>{title}</h3>
        {_rawExcerpt && (
          <div>
            <BlockText blocks={_rawExcerpt} />
          </div>
        )}
      </ProjectCardStyled>
    );
  }

  const fluidProps = getFluidGatsbyImage(
    mainImage.asset,
    { maxWidth: 400, maxHeight: 300 },
    clientConfig.sanity
  );

  return (
    <ProjectCardStyled to={`/project/${slug.current}`}>
      <ThumbImgHolderStyled>
        <Img fluid={fluidProps} alt={mainImage.alt} />
      </ThumbImgHolderStyled>
      <h3>{title}</h3>
      {_rawExcerpt && (
        <div>
          <BlockText blocks={_rawExcerpt} />
        </div>
      )}
    </ProjectCardStyled>
  );
};

export default ProjectPreview;

const ProjectCardStyled = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  max-width: 400px;
  margin-bottom: 20px;

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    padding-bottom: 5px;
  }
`;

const ThumbImgHolderStyled = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    border-radius: 10px;
    transition: opacity 500ms ease 0s;
    border-radius: 10px;
  }
`;
