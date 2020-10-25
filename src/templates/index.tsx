import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Footer from "../components/footer";

import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";

import tileIcon from "../images/tile.svg";
import listIcon from "../images/list.svg";

import shape1 from "../images/square-filled.svg";
import shape2 from "../images/square-hollow.svg";
import shape3 from "../images/square-dashed.svg";
import shape4 from "../images/triangle-filled.svg";
import shape5 from "../images/triangle-hollow.svg";

// TODO: Fix Netlify Forms integration.
// TODO: Fix Netlify CMS integration.
// TODO: Add Pagination for Repos and Blog Posts.

function fetchGithub() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('/.netlify/functions/github')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);
  return repositories;
}

const TypeEffect = ({ text }) => {
  const [typingText, setTypingText] = useState<string>('');
  useEffect(() => {
      if (typingText.length < text.length)
          setTimeout(() => 
              setTypingText(text.substr(0, typingText.length + 1)), 
              100);
  }, [typingText]);

  return (
      <div>{`${typingText}_`}</div>
  );
}

const Home = ({ data }) => {
  const repositories = fetchGithub();
  const [repoView, setRepoView] = useState<boolean>(true);
  
  const { title, github, linkedin, instagram } = data.site.siteMetadata;
  const { splash, about, skills, projects } = data.file.childMarkdownRemark.frontmatter;
  
  const profileImage = data.profileImage.childImageSharp.fixed;

  const projectImages = {};
  data.projectImages.edges.forEach(edge => {
    projectImages[edge.node.base] = edge.node.childImageSharp.fluid;
  })

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
      <nav id="backToTop"><a href="#">Back to Top</a></nav>
      <section id="hero">
        <h1>{title}</h1>
        <TypeEffect text={splash} />
        <nav>
          <a href={`https://github.com/${github}`}>
            <img src={githubIcon} />
          </a>
          <a href={`https://linkedin.com/in/${linkedin}`}>
            <img src={linkedinIcon} />
          </a>
          <a href={`https://instagram.com/${instagram}`}>
            <img src={instagramIcon} />
          </a>
        </nav>
      </section>
      <section id="about">
        <div>
          <Img fixed={profileImage} />
        </div>
        <div>
          <h2>About</h2>
          <p>{about}</p>
          <Link to="/resume">Curriculum Vitae</Link>
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div>
          <div>
            <div><span>Languages</span></div>
            <ul>{skills.Languages.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Front End Development</span></div>
            <ul>{skills.Front_End_Development.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Back End Development</span></div>
            <ul>{skills.Back_End_Development.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
          </div>
          <div>
            <div><span>Mobile Development</span></div>
            <ul>{skills.Mobile_Development.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Game Development</span></div>
            <ul>{skills.Game_Development.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Desktop Development</span></div>
            <ul>{skills.Desktop_Development.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Currently Learning</span></div>
            <ul>{skills.Currently_Learning.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
          </div>
          <div>
            <div><span>Tools</span></div>
            <ul>{skills.Tools.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Soft Skills</span></div>
            <ul>{skills.Soft_Skills.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
            <div><span>Conceptual Knowledge</span></div>
            <ul>{skills.Conceptual_Knowledge.map(item => {
              return <li key={item}>{item}</li>
            })}</ul>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {projects.map(project => {
          return (
            <div key={project.name}>
              <div>
                <div><span>{project.name}</span></div>
                <div>
                  <div>{project.description}</div>
                  <div>{project.tags.map(tag => {
                    return <div key={tag}>{tag}</div>
                  })}</div>
                  {project.link && <a href={project.link}>Open</a>}
                  {project.repository && <a href={project.repository}>GitHub</a>}
                </div>
              </div>
              <div>
                <Img fluid={projectImages[project.image]} />
              </div>
            </div>
          );
        })}
        <section>
          <div>
            <h3>Repositories</h3>
            <div>
              <button 
                onClick={() => setRepoView(true)} 
                style={{ border: repoView ? '1px solid #fff' : 'none' }}>
                  <img src={tileIcon} />
              </button>
              <button
                onClick={() => setRepoView(false)}
                style={{ border: repoView ? 'none' : '1px solid #fff' }}>
                <img src={listIcon} />
              </button>
            </div>
          </div>
          {repositories.length > 0 ? 
            (repoView ? 
              <div>{
                repositories.map(repo => {
                  return (
                    <div key={repo.name} onClick={() => window.location = repo.url}>
                      <div>
                        <img src={githubIcon} />
                        <div>{repo.name}</div>
                        <div>{repo.description}</div>
                      </div>
                      <div>
                        <div>{repo.primaryLanguage}</div>
                        <div>{repo.createdAt}</div>
                      </div>
                    </div>
                  );
                })
              }</div> 
              :
              <table cellSpacing='0'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>{
                  repositories.map(repo => {
                    return (
                      <tr key={repo.name} onClick={() => window.location = repo.url}>
                        <td>{repo.name}</td>
                        <td>{repo.description}</td>
                        <td>{repo.primaryLanguage}</td>
                        <td>{repo.createdAt}</td>
                      </tr>
                    );
                  })
                }</tbody>
              </table> 
            ): 
            <span>
              Fetching data from GitHub, This may take a while...
            </span>
          }
        </section>
      </section>
      <Footer />
      <div id="backdrop">
        <img src={shape1} />
        <img src={shape2} />
        <img src={shape5} />
        <img src={shape3} />
        <img src={shape4} />
      </div>
    </>
  );
}

export default Home;

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        github
        linkedin
        instagram
      }
    }
    file(relativePath: { eq: "index.md" }) {
      childMarkdownRemark {
        frontmatter {
          splash
          about
          skills {
            Languages
            Front_End_Development
            Back_End_Development
            Mobile_Development
            Desktop_Development
            Game_Development
            Tools
            Conceptual_Knowledge
            Soft_Skills
            Currently_Learning
          }
          projects {
            name
            description
            tags
            link
            repository
            image
          }
        }
      }
    }
    profileImage: 
      file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    projectImages:
      allFile(filter: {
        sourceInstanceName: {eq: "images"},
        extension: {eq: "png"},
        relativeDirectory: {eq: "projects"}
      }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 576) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }
`