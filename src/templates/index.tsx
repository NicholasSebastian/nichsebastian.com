import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";

const Home = ({ data }) => {
  const {
    splash,
    about,
    skills,
    projects
  } = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      <SEO title="Home" />
      <nav id="navbar"></nav>
      <nav id="sosmed"></nav>
      <section id="hero">{splash}</section>
      <section id="about"></section>
      <section id="skills"></section>
      <section id="projects"></section>
      <div id="backdrop"></div>
    </>
  );
}

export default Home;

export const indexQuery = graphql`
  query {
    file (
      name: {
        eq: "index"
      }
    ) {
      childMarkdownRemark {
        frontmatter {
          splash
          about {
            Games
            Mobile_Apps
            Websites
          }
          skills {
            Conceptual_Knowledge
            Game_Development
            Languages
            Mobile_Development
            Others
            Soft_Skills
            Tools
            Web_Development
          }
          projects {
            name
            link
          }
        }
      }
    }
  }
`