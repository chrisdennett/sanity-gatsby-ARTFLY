import React from "react";
import styled from "styled-components";
//https://www.npmjs.com/package/react-twitter-embed
import { TwitterTweetEmbed } from "react-twitter-embed";

export default ({ node }) => {
  console.log("Twitter Post: ", node);

  if (!node || !node.url) {
    return null;
  }

  //https://twitter.com/paulrickards/status/1150519293215465475?lang=en

  const { url } = node;
  const tweetId = url ? url.split("/").pop() : "42";

  return (
    <Outer>
      <Wrapper>
        <TwitterTweetEmbed tweetId={tweetId} options={{ width: "100%" }} />
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  overflow: hidden;
  twitter-widget {
    margin: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;
