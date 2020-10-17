import React from "react";
import { graphql } from "gatsby";

const Resume = ({ data }) => {
    const {
        name
    } = data.file.childMarkdownRemark.frontmatter;
    return (
        <>
            <h1>Resume Page</h1>
            <div>{name}</div>
        </>
    );
}

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