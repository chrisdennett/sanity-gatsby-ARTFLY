import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// comps
import BlockText from "./block-text";
import ImageWithPlaceHolder from "./image-with-placeholder";

import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const ProjectPreview = ({ title, _rawExcerpt, slug, mainImage }) => {
  if (!mainImage) return null;
  const { height, width } = mainImage.asset.metadata.dimensions;
  const isPortrait = height > width;
  const maxImgWidth = isPortrait ? 300 : 500;

  const fluidProps = getFluidGatsbyImage(
    mainImage.asset,
    { maxWidth: maxImgWidth, maxHeight: 300 },
    clientConfig.sanity
  );

  return (
    <ProjectCardStyled to={`/project/${slug.current}`}>
      <ThumbImgHolderStyled>
        <Img fluid={fluidProps} alt={mainImage.alt} />
      </ThumbImgHolderStyled>
      {/* <ThumbImgHolderStyled>
        <ImageWithPlaceHolder image={mainImage} maxWidth={400} maxHeight={300} />
      </ThumbImgHolderStyled> */}
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

const ThumbImgHolderStyled = styled.div``;
