import React from "react";
import styled from "styled-components";

import ProjectPreviewGrid from "../components/project-preview-grid";
import ProjectTags from "../components/project-tags";
import SectionHeader from "../components/section-header";

const Home = ({ projectNodes, tagNodes }) => {
  if (!projectNodes) return null;

  console.log(
    "projectNodes: ",
    projectNodes.filter(p => p.title === "Sick Toys")
  );

  const featuredProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured === true
  );

  const otherProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured !== true
  );

  const draftProjects = projectNodes.filter(proj => proj.projectTypes === "draft");

  return (
    <Wrapper>
      {/* <h2>Featured Projects:</h2> */}
      <SectionHeader title={"Featured Projects"} />
      {projectNodes && (
        <>
          <ProjectPreviewGrid nodes={featuredProjects} />
        </>
      )}

      {otherProjects.length > 0 && (
        <>
          <SectionHeader title={"Other Projects"} />
          <ProjectPreviewGrid nodes={otherProjects} />
        </>
      )}

      {draftProjects && (
        <>
          <SectionHeader
            title={"DRAFT Projects to write up"}
            description={
              "These haven't be written up yet - basically this is our todo list made public!"
            }
          />
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
