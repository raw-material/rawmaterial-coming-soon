module.exports = {
  siteMetadata: {
    title: `RawMaterial`,
    description: `RawMaterial: coming soon`,
    author: `@nicolazambello`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RawMaterial: coming soon`,
        short_name: `RawMaterial`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#F0FF00`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
