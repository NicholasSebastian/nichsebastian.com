import React from "react";
import { graphql } from "gatsby";

const Resume = ({ data }) => {
    const {
        name
    } = data.file.childMarkdownRemark.frontmatter;
    return (
        <>
            <h2>Resume Page</h2>
            <div>{name}</div>
        </>
    );
}

// Try scraping/API from linkedin instead.

export default Resume;

export const resumeQuery = graphql`
    query {
        file (
            name: {
                eq: "resume"
            }
        ) {
            childMarkdownRemark {
                frontmatter {
                    name
                }
            }
        }
    }
`