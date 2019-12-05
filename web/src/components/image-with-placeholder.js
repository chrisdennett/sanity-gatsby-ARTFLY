import React, { useState } from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const ImageWithPlaceHolder = ({ image, maxWidth, maxHeight, style = {} }) => {
  const [imgOpacity, setImgOpacity] = useState(0);

  if (!image || !image.asset)
    return (
      <div>
        <img src={"https://via.placeholder.com/400x300.png?text=PHOTO+OR+IT+NEVER+HAPPENED!"} />
      </div>
    );

  const { metadata } = image.asset;
  let { height: _height, width: _width } = metadata.dimensions;

  if (image.crop) {
    const { top, right, bottom, left } = image.crop;
    const croppedWidth = _width * (left + right);
    const croppedHeight = _height * (top + bottom);

    _width -= croppedWidth;
    _height -= croppedHeight;
  }

  const _maxWidth = Math.round(Math.min(maxWidth, _width));

  const imageObject = buildImageObj(image);
  const imageUrlObect = imageUrlFor(imageObject)
    .width(_maxWidth)
    .height(maxHeight)
    .fit("max");

  const imageUrl = imageUrlObect.url();
  let heightToWidthRatio = _width / _height;

  if (maxHeight) {
    heightToWidthRatio = _maxWidth / maxHeight;
  }

  const widthToHeightRatio = 1 / heightToWidthRatio;

  const includePadding = !metadata.isOpaque;

  return (
    <div style={style}>
      <div style={{ maxWidth: _maxWidth, margin: "auto" }}>
        <ImageWithPlaceholderInternal
          imgOpacity={imgOpacity}
          widthToHeightRatio={widthToHeightRatio}
          heightToWidthRatio={heightToWidthRatio}
          includePadding={includePadding}
          style={{
            backgroundImage: `url(${metadata.lqip})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        >
          <img src={imageUrl} onLoad={() => setImgOpacity(1)} />
        </ImageWithPlaceholderInternal>
      </div>
    </div>
  );
};

export default ImageWithPlaceHolder;

const ImageWithPlaceholderInternal = styled.div`
  display: block;
  position: relative;
  padding-top: ${props => props.widthToHeightRatio * 100}%;
  background: white;
  border-radius: 10px;

  img {
    position: absolute;
    background: ${props => (props.includePadding ? "white" : "none")};
    border: ${props => (props.includePadding ? "10px solid white" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.imgOpacity};
    transition: opacity 500ms ease 0s;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
