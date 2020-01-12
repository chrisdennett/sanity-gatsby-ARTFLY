import React from "react";
import styled from "styled-components";
import BlockContent from "../components/block-content";
import ProjectPreviewGrid from "../components/project-preview-grid";
import ProjectTags from "../components/project-tags";
import SectionHeader from "../components/section-header";

const Home = ({ projectNodes, tagNodes, intro }) => {
  if (!projectNodes) return null;

  const featuredProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured === true
  );

  const otherProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured !== true
  );

  const draftProjects = projectNodes.filter(proj => proj.projectTypes === "draft");

  return (
    <Wrapper>
      {intro && (
        <Intro>
          <BlockContent blocks={intro || []} />
        </Intro>
      )}

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

      {draftProjects.length > 0 && (
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

const Intro = styled.div`
  font-size: 1.5rem;
  margin: 0 auto 40px auto;
  max-width: 960px;
  text-align: center;
`;
