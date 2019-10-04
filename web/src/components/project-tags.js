import React from "react";
import { Link } from "gatsby";

const TagSection = ({ sectionName, tagArr }) => {
  return (
    <div>
      {tagArr.length > 0 && <h3>{sectionName}</h3>}
      {tagArr.map(tag => (
        <Link key={tag.name} to={`/${tag.slug.current}`}>
          {tag.name}
        </Link>
      ))}
    </div>
  );
};

const ProjectTags = ({ tags }) => {
  const people = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("person"));
  const events = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("event"));
  const organisations = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("organisation"));
  const sponsors = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("sponsor"));
  const categories = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("category"));

  return (
    <div>
      <h1>ProjectTags</h1>

      <TagSection sectionName={"People"} tagArr={people} />
      <TagSection sectionName={"Organisations"} tagArr={organisations} />
      <TagSection sectionName={"Events"} tagArr={events} />
      <TagSection sectionName={"Sponsors"} tagArr={sponsors} />
      <TagSection sectionName={"categories"} tagArr={categories} />
    </div>
  );
};

export default ProjectTags;
