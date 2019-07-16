module.exports = ({ basePath = '/', contentPath = 'data', imagesPath = 'images' }) => ({
  siteMetadata: {
    title: 'Gatsby Scoreboard Theme',
    headline: 'Recent MLB Scores',
    basePath
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: imagesPath,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Game`
      }
    }
  ]
});
