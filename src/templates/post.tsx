import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import Footer from "../components/footer";

const Post = ({ data }) => {
    const {
        frontmatter,
        timeToRead,
        html
    } = data.file.childMarkdownRemark;

    return (
        <>
            <SEO title={frontmatter.title} 
            description={frontmatter.description} />
            <div id="post-nav">
                <Link to="/">Home</Link>
                <Link to="/blog">All Posts</Link>
            </div>
            <article id="post">
                <h3>{frontmatter.title}</h3>
                <div>Posted on {
                    (new Date(frontmatter.date))
                    .toLocaleDateString('en-GB', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                }</div>
                <div>{timeToRead} min read</div>
                <div dangerouslySetInnerHTML={{ __html: html}} />
            </article>
            <Footer/>
        </>
    );
}

export default Post;

export const postQuery = graphql`
    query ($fileName: String!) {
        file (
            name: {
                eq: $fileName
            }
        ) {
            childMarkdownRemark {
                frontmatter {
                    title
                    description
                    date
                }
                timeToRead
                html
            }
        }
    }
`
