import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// helpers
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
// comps
import BlockText from "./block-text";

const ProjectCard = props => {
  return (
    <ProjectCardStyled to={`/project/${props.slug.current}`}>
      <ThumbImgHolderStyled>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </ThumbImgHolderStyled>
      <h3>{props.title}</h3>
      {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </ProjectCardStyled>
  );
};

export default ProjectCard;

const ProjectCardStyled = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const ThumbImgHolderStyled = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
