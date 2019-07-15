module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  siteMetadata: {
    title: 'Gatsby Scoreboard Theme',
    headline: 'Recent MLB Scores',
    basePath
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Game`
      }
    }
  ]
});
