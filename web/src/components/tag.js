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

  return (
    <PageStyled>
      <MainWrapperStyled>
        {image && image.asset && (
          <MainImageHolderStyled>
            <img
              style={{ background: "#fff", padding: 20 }}
              src={imageUrlFor(buildImageObj(image))
                .maxWidth(1200)
                .url()}
              alt={image.alt}
            />
          </MainImageHolderStyled>
        )}

        <INTRO>
          <h1>{name}</h1>
        </INTRO>

        <MainContentStyled>{_rawBio && <BlockContent blocks={_rawBio || []} />}</MainContentStyled>
      </MainWrapperStyled>
    </PageStyled>
  );
}

export default Tag;
