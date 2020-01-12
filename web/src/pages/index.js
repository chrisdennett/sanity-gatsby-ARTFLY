import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Home from "./home";

const IndexPage = props => {
  const { data, errors } = props;

  // show error page if error thrown
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  // get all pages with slugs
  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : [];
  const tagNodes = (data || {}).tags
    ? mapEdgesToNodes(data.tags).filter(filterOutDocsWithoutSlugs)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Home projectNodes={projectNodes} tagNodes={tagNodes} intro={site._rawIntro} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      _rawIntro(resolveReferences: { maxDepth: 5 })
      keywords
    }
    tags: allSanityTag {
      edges {
        node {
          name
          _type
          tagTypes
          slug {
            current
          }
        }
      }
    }
    projects: allSanityProject(
      limit: 1000
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } } }
    ) {
      edges {
        node {
          id
          mainImage {
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
          title
          projectTypes
          isFeatured
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;
