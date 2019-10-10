import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ProjectTags = ({ tags }) => {
  const people = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("person"));
  const events = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("event"));
  const organisations = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("organisation"));
  const sponsors = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("sponsor"));
  const categories = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("category"));

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
  return (
    <TagSectionStlyled>
      {tagArr.length > 0 && <h3>{sectionName}</h3>}
      {tagArr.map(tag => (
        <Link key={tag.name} to={`/${tag.slug.current}`}>
          {tag.name}
        </Link>
      ))}
    </TagSectionStlyled>
  );
};

const TagSectionStlyled = styled.div`
  margin-bottom: 25px;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
  a {
    text-decoration: none;
    font-size: 14px;
    color: #c73262;
  }
  a:hover {
    color: black;
  }
`;
