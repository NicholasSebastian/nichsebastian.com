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
            {edges
            .sort((a, b): number => {   // GraphQL's sort not working so this is a fix.
              const first = new Date(a.node.childMarkdownRemark.frontmatter.date);
              const second = new Date(b.node.childMarkdownRemark.frontmatter.date);
              return second.valueOf() - first.valueOf();
            })
            .map(({ node }) => {
              const post = node.childMarkdownRemark;
              const dateString = new Date(post.frontmatter.date);
              const year = dateString.toLocaleString('en-GB', { year: 'numeric' });
              const month = dateString.toLocaleString('en-GB', { month: 'long' });
              const date = dateString.toLocaleString('en-GB', { day: 'numeric' });
              const day = dateString.toLocaleString('en-GB', { weekday: 'long' });
              return (
                <Link to={node.name} key={post.frontmatter.title} >
                  <div>
                    <div>
                      <div>
                        <div>{month}</div>
                        <div>{date}</div>
                        <div>{year}</div>
                      </div>
                      <div>{day}</div>
                    </div>
                    <div>
                      <div>{post.frontmatter.title}</div>
                      <div>{post.frontmatter.description}</div>
                      <div>{post.timeToRead} min read</div>
                    </div>
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
      },
        sort: {
          fields: childMarkdownRemark___frontmatter___date,
          order: DESC
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