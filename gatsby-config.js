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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-remark`
  ],
}
