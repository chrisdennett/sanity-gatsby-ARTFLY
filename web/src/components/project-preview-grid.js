import styled from "styled-components";
import React from "react";
import ProjectPreview from "./project-preview";

const ProjectPreviewGrid = ({ title, nodes }) => {
  return (
    <StyledGrid>
      {title && <HeaderStyled>{title}</HeaderStyled>}
      <GridUlStyled>
        {nodes &&
          nodes.map(node => (
            <CARD_HOLDER key={node.id}>
              <ProjectPreview {...node} />
            </CARD_HOLDER>
          ))}
      </GridUlStyled>
    </StyledGrid>
  );
};

export default ProjectPreviewGrid;

const StyledGrid = styled.div`
  margin: 2em 0 4em;
`;

const HeaderStyled = styled.h2`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 2rem 0;
  text-align: center;
`;

const GridUlStyled = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CARD_HOLDER = styled.div`
  margin: 0 15px 40px 15px;
  width: 400px;
`;
