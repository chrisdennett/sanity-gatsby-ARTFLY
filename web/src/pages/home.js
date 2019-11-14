import React from "react";
import styled from "styled-components";

import ProjectPreviewGrid from "../components/project-preview-grid";

const Home = ({ site, projectNodes, tagNodes }) => {
  return (
    <Wrapper>
      <h1 hidden>Welcome to {site.title}</h1>
      {projectNodes && <ProjectPreviewGrid nodes={projectNodes} />}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;
