import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// comps
import BlockText from "./block-text";
import ImageWithPlaceHolder from "./image-with-placeholder";

const ProjectPreview = ({ title, _rawExcerpt, slug, mainImage }) => {
  return (
    <ProjectCardStyled to={`/project/${slug.current}`}>
      <ThumbImgHolderStyled>
        <ImageWithPlaceHolder image={mainImage} maxWidth={400} maxHeight={300} />
      </ThumbImgHolderStyled>
      <h3>{title}</h3>
      {_rawExcerpt && (
        <div>
          <BlockText blocks={_rawExcerpt} />
        </div>
      )}
    </ProjectCardStyled>
  );
};

export default ProjectPreview;

const ProjectCardStyled = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  max-width: 400px;
  margin-bottom: 20px;

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    padding-bottom: 5px;
  }
`;

const ThumbImgHolderStyled = styled.div``;
