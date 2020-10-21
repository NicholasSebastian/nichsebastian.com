import React from "react";
import { graphql } from "gatsby";

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
            <article id="post">
                <h3>{frontmatter.title}</h3>
                <div>{frontmatter.date.replace(/-/g, '/')}</div>
                <div>{`Time to Read: ${timeToRead} min(s)`}</div>
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
