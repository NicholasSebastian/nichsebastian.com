module.exports = {
  siteMetadata: {
    title: "Nicholas Sebastian",
    description: "The website of an undergraduate computer science student.",
    siteUrl: "https://www.nichsebastian.com",
    github: "NicholasSebastian",
    linkedin: "nichsebastian",
    instagram: "nicholashendrata"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`
  ],
}
