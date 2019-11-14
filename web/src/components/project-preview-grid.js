import styled from "styled-components";
import React from "react";
import ProjectPreview from "./project-preview";

const ProjectPreviewGrid = ({ nodes }) => {
  return (
    <StyledGrid>
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
