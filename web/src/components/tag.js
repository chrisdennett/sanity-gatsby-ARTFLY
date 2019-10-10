import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import { MainImageHolderStyled, MainContentStyled, MainWrapperStyled, PageStyled } from "./project";

function Tag(props) {
  const { _rawBio, name, image } = props;

  return (
    <PageStyled>
      {image && image.asset && (
        <MainImageHolderStyled>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={image.alt}
          />
        </MainImageHolderStyled>
      )}
      <MainWrapperStyled>
        <MainContentStyled>
          <h1>{name}</h1>
          {_rawBio && <BlockContent blocks={_rawBio || []} />}
        </MainContentStyled>
      </MainWrapperStyled>
    </PageStyled>
  );
}

export default Tag;