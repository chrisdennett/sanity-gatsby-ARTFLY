import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import BlockContent from "./block-content";
import { INTRO, MainContentStyled, MainWrapperStyled, PageStyled } from "./project";
import ProjectPreviewGrid from "./project-preview-grid";
import SectionHeader from "./section-header";
import ContactDetails from "./contact-details";
import { Link } from "gatsby";

const Tag = ({ _rawBio, name, image, projectNodes, contactDetails }) => {
  if (!projectNodes) return null;
  const { height, width } = image.asset.metadata.dimensions;

  const maxWidth = Math.min(600, width);
  const maxHeight = Math.min(400, height);

  const fluidProps = getFluidGatsbyImage(image.asset, { maxWidth, maxHeight }, clientConfig.sanity);

  const featuredProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured === true
  );

  const otherProjects = projectNodes.filter(
    proj => proj.projectTypes === "project" && proj.isFeatured !== true
  );

  const draftProjects = projectNodes.filter(proj => proj.projectTypes === "draft");

  return (
    <PageStyled>
      <MainWrapperStyled>
        <ThumbImgHolderStyled maxWidth={maxWidth}>
          <Img fluid={fluidProps} alt={image.alt} />
        </ThumbImgHolderStyled>

        <INTRO>
          <h1>{name}</h1>
        </INTRO>

        {contactDetails && <ContactDetails contactDetails={contactDetails} />}

        <MainContentStyled>{_rawBio && <BlockContent blocks={_rawBio || []} />}</MainContentStyled>

        <ProjectsSectionStyled>
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
        </ProjectsSectionStyled>
      </MainWrapperStyled>
    </PageStyled>
  );
};

export default Tag;

const ProjectsSectionStyled = styled.div`
  margin-top: 40px;
`;

const ThumbImgHolderStyled = styled.div`
  max-width: ${props => props.maxWidth}px;
  width: 100%;
  margin: 0 auto 40px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    border-radius: 10px;
    transition: opacity 500ms ease 0s;
    border-radius: 10px;
  }
`;
