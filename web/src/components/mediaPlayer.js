import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

export default ({ node }) => {
  if (!node.url) {
    return null;
  }

  return (
    <Outer>
      <Wrapper>
        <IFrameWrapperStyled>
          <ReactPlayer
            style={{ maxWidth: 640 }}
            width={"100%"}
            url={node.url}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              soundcloud: { show_artwork: false }
            }}
          />
        </IFrameWrapperStyled>
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 20px auto;
`;

const Wrapper = styled.div`
  background: white;
  padding: 10px;
  margin-top: 20px;
  margin: 0 auto;
`;

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
