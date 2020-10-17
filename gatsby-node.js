const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const pages = await graphql(`
        {
            allFile (
                filter: {
                    extension: {eq: "md"}
                }
            ) {
                edges {
                    node {
                        name
                        relativeDirectory
                    }
                }
            }
        }
    `);
    
    pages.data.allFile.edges.forEach(({ node }) => {
        const { name } = node;
        if (node.relativeDirectory == "blog")
            createPage({
                path: `/blog/${name}`,
                component: path.resolve(`src/templates/post.tsx`),
                context: {
                    fileName: name
                }
            });
        else {
            const pathName = name == "index" ? "/" : `/${name}`;
            createPage({
                path: pathName,
                component: path.resolve(`src/templates/${name}.tsx`)
            });
        } 
    });
}