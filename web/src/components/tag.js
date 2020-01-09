import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import BlockContent from "./block-content";
import { INTRO, MainContentStyled, MainWrapperStyled, PageStyled } from "./project";

function Tag(props) {
  const { _rawBio, name, image } = props;

  const { height, width } = image.asset.metadata.dimensions;

  const maxWidth = Math.min(600, width);
  const maxHeight = Math.min(400, height);

  const fluidProps = getFluidGatsbyImage(image.asset, { maxWidth, maxHeight }, clientConfig.sanity);

  return (
    <PageStyled>
      <MainWrapperStyled>
        <ThumbImgHolderStyled maxWidth={maxWidth}>
          <Img fluid={fluidProps} alt={image.alt} />
        </ThumbImgHolderStyled>

        <INTRO>
          <h1>{name}</h1>
        </INTRO>

        <MainContentStyled>{_rawBio && <BlockContent blocks={_rawBio || []} />}</MainContentStyled>
      </MainWrapperStyled>
    </PageStyled>
  );
}

export default Tag;

const ThumbImgHolderStyled = styled.div`
  max-width: ${props => props.maxWidth}px;
  width: 100%;
  margin: 0 auto 40px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    border-radius: 10px;
    transition: opacity 500ms ease 0s;
    border-radius: 10px;
  }
`;
