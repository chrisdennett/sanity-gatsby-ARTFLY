import React from "react";
import styled from "styled-components";

import ProjectPreviewGrid from "../components/project-preview-grid";
import ProjectTags from "../components/project-tags";

const Home = ({ projectNodes, tagNodes }) => {
  const featuredProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured === true
  );

  const otherProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured !== true
  );

  const draftProjects = projectNodes.filter(proj => proj.projectTypes === "draft");

  return (
    <Wrapper>
      <h2>Featured Projects:</h2>
      {projectNodes && (
        <>
          <ProjectPreviewGrid nodes={featuredProjects} />
        </>
      )}

      {otherProjects.length > 0 && (
        <>
          <h3>Other Projects:</h3>
          <ProjectPreviewGrid nodes={otherProjects} />
        </>
      )}

      {draftProjects && (
        <>
          <h3>DRAFT PROJECTS</h3>
          <p>These haven't be written up yet - basically this is our todo list made public!</p>
          <ProjectPreviewGrid nodes={draftProjects} />
        </>
      )}

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
