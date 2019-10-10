import React from "react";
import styled from "styled-components";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

export default ({ node }) => {
  if (!node.url) {
    return null;
  }

  const id = getYouTubeId(node.url);
  return (
    <IFrameWrapperStyled>
      <YouTube videoId={id} />;
    </IFrameWrapperStyled>
  );
};

const IFrameWrapperStyled = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
