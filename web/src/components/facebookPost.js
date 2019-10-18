import React from "react";
import styled from "styled-components";
import { FacebookProvider, EmbeddedPost } from "react-facebook";

export default ({ node }) => {
  if (!node.url) {
    return null;
  }

  const { url } = node;

  return (
    <Outer>
      <Wrapper>
        <FacebookProvider appId="576211709245398">
          <EmbeddedPost href={url} width="auto" />
        </FacebookProvider>
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  max-width: 520px;
  margin: 20px auto;
`;

const Wrapper = styled.div`
  background: white;
  padding: 10px;
  margin-top: 20px;
  margin: 0 auto;
`;
