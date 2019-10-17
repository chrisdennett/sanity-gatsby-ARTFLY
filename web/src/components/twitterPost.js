import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default ({ node }) => {
  if (!node.url) {
    return null;
  }

  const { url } = node;
  const tweetId = url.split("/").pop();

  return (
    <Outer>
      <Wrapper>
        <TwitterTweetEmbed tweetId={tweetId} />
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  twitter-widget {
    margin: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;
