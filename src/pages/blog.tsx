import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Footer from "../components/footer";

const Blog = ({ data }) => {
  const banner = data.banner.childImageSharp.fluid;
  const { edges } = data.allFile;
  return (
    <>
      <SEO title="Blog Posts" />
      <div id="blog-list">
        <Img fluid={banner} />
        <Link to="/">Home</Link>
        <div>
          <section>
            <h2>Blog</h2>
            <h3>Occasional postings about my experiences and the things I've learned.</h3>
            {edges.map(({ node }) => {
              const post = node.childMarkdownRemark;
              return (
                <Link to={node.name}>
                  <div>
                    <div>{post.frontmatter.title}</div>
                    <div>{post.frontmatter.description}</div>
                    <div>{post.frontmatter.date.replace(/-/g, '/')}</div>
                    <div>{post.timeToRead} min read</div>
                  </div>
                </Link>
              );
            })}
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Blog;

export const blogQuery = graphql`
  query {
    allFile (
      filter: {
        extension: {
          eq: "md"
        },
        relativeDirectory: {
          eq: "blog"
        }
      }
    ) {
      edges {
        node {
          name
          childMarkdownRemark {
            frontmatter {
              title
              description
              date
            }
            timeToRead
          }
        }
      }
    }
    banner:
      file (relativePath: {eq: "banner.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`