import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface PropTypes {
    title?: string,
    description?: string,
    image?: string
}

const SEO: React.FunctionComponent<PropTypes> = ({ title, description, image }) => {
    const { site } = useStaticQuery(query);
    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
    } = site.siteMetadata;

    return (
        <Helmet title={`${defaultTitle} - ${title}`}>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={`${defaultTitle} - ${title}`} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={siteUrl} />
            {image && <meta property="og:image" content={image} />}
        </Helmet>
    );
};

export default SEO;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title,
                defaultDescription: description,
                siteUrl,
            }
        }
    }
`