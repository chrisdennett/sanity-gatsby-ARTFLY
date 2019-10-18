import React from "react";
import styled from "styled-components";
import FaFacebookSquare from "react-icons/lib/fa/facebook-square";
import { FacebookProvider, EmbeddedPost } from "react-facebook";

const FacebookPreview = ({ value }) => {
  const { url } = value;

  if (!url) {
    return <div>Missing Tweet URL</div>;
  }

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

export default {
  name: "facebook",
  type: "object",
  title: "Facebook",
  icon: FaFacebookSquare,
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL"
    }
  ],
  preview: {
    select: {
      url: "url"
    },
    component: FacebookPreview
  }
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
