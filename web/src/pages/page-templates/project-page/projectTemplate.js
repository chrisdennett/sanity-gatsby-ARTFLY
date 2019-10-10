import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../../../components/graphql-error-list";
import Project from "./project";
import SEO from "../components/seo";
import Layout from "../containers/layout";

const ProjectTemplate = props => {
  const { data, errors } = props;
  const project = data && data.project;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  );
};
export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      title
      slug {
        current
      }
      tags {
        name
        tagTypes
        slug {
          current
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
  }
`;
