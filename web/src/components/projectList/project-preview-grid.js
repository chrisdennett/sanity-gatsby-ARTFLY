import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import ProjectPreview from "./project-preview";

const ProjectPreviewGrid = ({ title, nodes, browseMoreHref }) => {
  return (
    <StyledGrid>
      {title && <HeaderStyled>{title}</HeaderStyled>}
      <GridUlStyled>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </GridUlStyled>
      {browseMoreHref && (
        <BrowserMoreNavStyled>
          <Link to={browseMoreHref}>Browse more</Link>
        </BrowserMoreNavStyled>
      )}
    </StyledGrid>
  );
};

export default ProjectPreviewGrid;

const StyledGrid = styled.div`
  margin: 2em 0 4em;
`;

const HeaderStyled = styled.h2`
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 2rem 0;
`;

const GridUlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;

  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 675px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const BrowserMoreNavStyled = styled.div`
  margin-top: 1rem;
  text-align: right;

  a {
    display: inline-block;
    padding: 0.5rem 0;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: red;
  }
`;
