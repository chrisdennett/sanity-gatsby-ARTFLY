import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Helmet from 'react-helmet'

const ProjectTemplate = props => {
  const {data, errors} = props
  const project = data && data.project
  return (
    <Layout>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Hello</title>
        <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          id="snipcart"
          data-api-key="Yjc3ZGM1OTQtMTgxNi00NjVkLWI4ZjItOGU5MTY5NmVjNDg1NjM3MjQ1MjE0OTUxNTIxOTY0"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          type="text/css"
          rel="stylesheet"
        />
      </Helmet>

      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      {project && <Project {...project} />}

      <button
        className="snipcart-add-item buyBtn"
        data-item-id={1}
        data-item-price={42}
        data-item-image={'/fireworks'}
        data-item-name={'Fireworks'}
        data-item-description={'Things that go bang'}
        data-item-url={'http://localhost:8000'}
      >
        Buy
      </button>
    </Layout>
  )
}
export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: {eq: $id}) {
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
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
