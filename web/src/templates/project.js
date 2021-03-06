import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
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
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
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
      _rawExcerpt
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
      mainImage {
        _key
        _type
        caption
        alt
        crop {
          top
          bottom
          left
          right
        }
        asset {
          _id
          metadata {
            lqip
            dimensions {
              height
              width
            }
            isOpaque
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;
