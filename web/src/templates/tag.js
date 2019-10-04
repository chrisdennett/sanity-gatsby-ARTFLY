import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
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
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
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
