import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import {
  INTRO,
  MainImageHolderStyled,
  MainContentStyled,
  MainWrapperStyled,
  PageStyled
} from "./project";

function Tag(props) {
  const { _rawBio, name, image } = props;

  let HeaderImage = null;

  if (image && image.asset) {
    const imageObject = buildImageObj(image);
    const imageUrlObect = imageUrlFor(imageObject)
      .width(600)
      .fit("max");
    const imageUrl = imageUrlObect.url(); // + "?w=600&fit=max";

    HeaderImage = (
      <MainImageHolderStyled>
        <img style={{ background: "#fff", padding: 20 }} src={imageUrl} alt={image.alt} />
      </MainImageHolderStyled>
    );
  }

  return (
    <PageStyled>
      <MainWrapperStyled>
        {HeaderImage}

        <INTRO>
          <h1>{name}</h1>
        </INTRO>

        <MainContentStyled>{_rawBio && <BlockContent blocks={_rawBio || []} />}</MainContentStyled>
      </MainWrapperStyled>
    </PageStyled>
  );
}

export default Tag;
