import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import TypeEffect from "../components/typeEffect";

import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";
import profileImage from "../images/profile.png";

const Home = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const {
    splash,
    about,
    skills,
    projects
  } = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      <SEO title="Home" />
      <nav id="navbar">
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <section id="hero">
        <h1>{title}</h1>
        <TypeEffect text={splash} />
        <nav>
          <a><img src={githubIcon} /></a>
          <a><img src={linkedinIcon} /></a>
          <a><img src={instagramIcon} /></a>
        </nav>
      </section>
      <section id="about">
        <div>
          <img src={profileImage} />
        </div>
        <div>
          <h2>About</h2>
          <p>{about}</p>
          <Link to="/resume">Curriculum Vitae</Link>
        </div>
      </section>
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
          about
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
    site {
      siteMetadata {
        title
      }
    }
  }
`