import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Tag from "../components/tag";
import SEO from "../components/seo";
import Layout from "../containers/layout";

const TagTemplate = props => {
  const { data, errors } = props;
  const tag = data && data.tag;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {tag && <SEO title={tag.name || "Untitled"} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      {tag && <Tag {...tag} />}
    </Layout>
  );
};
export default TagTemplate;

export const query = graphql`
  query TagTemplateQuery($id: String!) {
    tag: sanityTag(id: { eq: $id }) {
      id
      name
      slug {
        current
      }
      tagTypes
      _rawBio(resolveReferences: { maxDepth: 5 })
      image {
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
            isOpaque
            dimensions {
              width
              height
            }
          }
        }
        alt
      }
    }
  }
`;
