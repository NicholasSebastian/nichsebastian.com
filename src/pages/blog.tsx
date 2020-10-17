import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import Entry from "../components/blogEntry";

const Blog = ({ data }) => {
  const { edges } = data.allFile;
  return (
    <>
      <SEO title="Blog Posts" />
      <div>Blog Posts</div>
      {edges.map(({ node }) => {
        const post = node.childMarkdownRemark;
        return (
          <Link to={node.name}>
            <Entry 
              title={post.frontmatter.title} 
              description={post.frontmatter.description} 
              date={post.frontmatter.date} 
              timeToRead={post.timeToRead} />
          </Link>
        );
      })}
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