const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const result2 = await graphql(`
    {
      allSanityTag(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  if (result2.errors) throw result2.errors;

  console.log("result2: ", result2);

  const projectEdges = (result.data.allSanityProject || {}).edges || [];
  const tagEdges = (result2.data.allSanityTag || {}).edges || [];

  console.log("tagEdges: ", tagEdges);

  // .filter(edge => !isFuture(edge.node.publishedAt))
  projectEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/project/${slug}/`;

    reporter.info(`Creating project page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id }
    });
  });

  tagEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/${slug}/`;

    reporter.info(`Creating tag page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/tag.js"),
      context: { id }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter);
};
