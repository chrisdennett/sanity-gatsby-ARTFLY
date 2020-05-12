// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'Yjc3ZGM1OTQtMTgxNi00NjVkLWI4ZjItOGU5MTY5NmVjNDg1NjM3MjQ1MjE0OTUxNTIxOTY0',
        autopop: true
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artfly Projects`,
        short_name: `Artfly`,
        icon: `src/img/favicon-32x32.png`
      }
    }
  ]
}
