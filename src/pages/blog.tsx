import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";

const Blog = ({ data }) => {
  const { edges } = data.allFile;
  return (
    <>
      <SEO title="Blog Posts" />
      <section id="blog-list">
        <h2>Blog Posts</h2>
        {edges.map(({ node }) => {
          const post = node.childMarkdownRemark;
          return (
            <Link to={node.name}>
              <div>
                <div>{post.frontmatter.title}</div>
                <div>{post.frontmatter.description}</div>
                <div>{post.frontmatter.date.replace(/-/g, '/')}</div>
                <div>{`Time to Read: ${post.timeToRead} min(s)`}</div>
              </div>
            </Link>
          );
        })}
      </section>
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
  }
`