import React from "react";
import BlockContent from "./block-content";
import { INTRO, MainContentStyled, MainWrapperStyled, PageStyled } from "./project";
import ImageWithPlaceHolder from "./image-with-placeholder";

function Tag(props) {
  const { _rawBio, name, image } = props;

  return (
    <PageStyled>
      <MainWrapperStyled>
        <ImageWithPlaceHolder image={image} maxWidth={600} />

        <INTRO>
          <h1>{name}</h1>
        </INTRO>

        <MainContentStyled>{_rawBio && <BlockContent blocks={_rawBio || []} />}</MainContentStyled>
      </MainWrapperStyled>
    </PageStyled>
  );
}

export default Tag;
