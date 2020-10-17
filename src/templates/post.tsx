import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

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
            <article>
            <h1>{frontmatter.title}</h1>
            <div><span>{frontmatter.date}</span></div>
            <div><span>{timeToRead}</span></div>
            <div dangerouslySetInnerHTML={{ __html: html}} />
            </article>
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
