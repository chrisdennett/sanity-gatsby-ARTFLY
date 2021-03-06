import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { getTagsByType } from "../lib/helpers";

const ProjectTags = ({ tags }) => {
  const { people, organisations, events, sponsors, categories } = getTagsByType(tags);

  return (
    <>
      <TagSection sectionName={"People"} tagArr={people} />
      <TagSection sectionName={"Organisations"} tagArr={organisations} />
      <TagSection sectionName={"Events"} tagArr={events} />
      <TagSection sectionName={"Sponsors"} tagArr={sponsors} />
      <TagSection sectionName={"categories"} tagArr={categories} />
    </>
  );
};

export default ProjectTags;

// ASSETS
const TagSection = ({ sectionName, tagArr }) => {
  if (tagArr.length === 0) return null;

  return (
    <TAG_SECTION>
      {tagArr.length > 0 && <h3>{sectionName}</h3>}
      {tagArr.map(tag => (
        <Link key={tag.name} to={`/${tag.slug.current}`}>
          {tag.name}
        </Link>
      ))}
    </TAG_SECTION>
  );
};

const TAG_SECTION = styled.div`
  margin-bottom: 25px;
  h3 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    /* color: rgba(0, 0, 0, 0.5); */
  }
  a {
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    color: #c73262;
    display: block;
  }
  a:hover {
    color: black;
  }
`;
