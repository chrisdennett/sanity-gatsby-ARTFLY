import React from "react";
import styled from "styled-components";

import ProjectPreviewGrid from "../components/project-preview-grid";
import ProjectTags from "../components/project-tags";

const Home = ({ projectNodes, tagNodes }) => {
  return (
    <Wrapper>
      {projectNodes && <ProjectPreviewGrid nodes={projectNodes} />}

      {tagNodes && (
        <TAGS_HOLDER>
          <ProjectTags tags={tagNodes} />
        </TAGS_HOLDER>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

export const TAGS_HOLDER = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  border: rgba(0, 0, 0, 0.1) solid 1px;

  div {
    margin: 15px;
  }
`;
