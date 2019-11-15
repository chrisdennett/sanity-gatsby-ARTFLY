import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
// TODO: Replace this with ImageWithPlaceholder component - but it'll need styling alterations
//https://github.com/sanity-io/gatsby-source-sanity#fluid
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

export default ({ node }) => {
  if (!node.asset) {
    return null;
  }

  const { height, width } = node.asset.metadata.dimensions;
  const isPortrait = height > width;
  const maxImgWidth = isPortrait ? 300 : 500;

  const fluidProps = getFluidGatsbyImage(
    node.asset,
    { maxWidth: maxImgWidth },
    clientConfig.sanity
  );

  return (
    <FigureStyled maxImgWidth={maxImgWidth}>
      <Img fluid={fluidProps} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </FigureStyled>
  );
};

const FigureStyled = styled.figure`
  max-width: ${props => props.maxImgWidth}px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  figcaption {
    padding: 10px;
  }
`;
