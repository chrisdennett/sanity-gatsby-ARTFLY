import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const ImageWithPlaceHolder = ({ image, maxWidth }) => {
  if (!image || !image.asset) return null;

  const { metadata } = image.asset;

  const _maxWidth = Math.min(maxWidth, metadata.dimensions.width);

  const imageObject = buildImageObj(image);
  const imageUrlObect = imageUrlFor(imageObject)
    .width(_maxWidth)
    .fit("max");
  const imageUrl = imageUrlObect.url();
  const heightToWidthRatio = metadata.dimensions.aspectRatio;
  const widthToHeightRatio = 1 / heightToWidthRatio;

  const includePadding = !metadata.isOpaque;

  return (
    <div>
      <div style={{ maxWidth: _maxWidth, margin: "auto" }}>
        <ImageWithPlaceholderInternal
          widthToHeightRatio={widthToHeightRatio}
          heightToWidthRatio={heightToWidthRatio}
          includePadding={includePadding}
          style={{
            backgroundImage: `url(${metadata.lqip})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        >
          <img src={imageUrl} />
        </ImageWithPlaceholderInternal>
      </div>
    </div>
  );
};

export default ImageWithPlaceHolder;

const ImageWithPlaceholderInternal = styled.div`
  display: block;
  position: relative;
  height: 0;
  padding-top: ${props => props.widthToHeightRatio * 100}%;
  background: white;
  margin-bottom: 40px;
  border-radius: 10px;

  img {
    position: absolute;
    background: white;
    border: ${props => (props.includePadding ? "10px solid white" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
